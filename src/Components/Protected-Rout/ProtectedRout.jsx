import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Cart/CartContext";

export default function ProtectedRout({ children, msg, redirect }) {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (!user) {
      navigate("/signin", { state: { msg, redirect } });
    }
  }, [user]);
  return children;
}
