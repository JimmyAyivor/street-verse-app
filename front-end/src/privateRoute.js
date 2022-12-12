import React from "react"
import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

export default function PrivateOutlet({ component: Component, ...rest }) {
    const { currentUser } = useAuth()
    return currentUser ? <Outlet /> : <Navigate to="/auth/login" />;

}

