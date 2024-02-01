import React, { useEffect } from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import { useState } from "react";
import Order from "./Order";
import {
  getFirestore,
  doc,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        const ordersCollectionRef = collection(
          db,
          "users",
          user?.uid,
          "orders"
        );

        const ordersQuery = query(
          ordersCollectionRef,
          orderBy("created", "desc")
        );

        const unsubscribe = onSnapshot(ordersQuery, (snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );

        return () => unsubscribe(); // Cleanup the listener when the component unmounts or when the user changes
      } else {
        setOrders([]);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="orders-order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
