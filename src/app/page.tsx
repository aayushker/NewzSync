"use client" 
import React from 'react';
import NavBar from './components/navbar/navbar';
// import Footer from './components/navbar/footer';
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <NavBar />
      <p>Hello</p>
      </>
  );
}