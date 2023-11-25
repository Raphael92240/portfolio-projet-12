import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Contact, About, Projet } from '@/Pages/Public/Index'

import Layout from '@/Layouts/Layout'

const router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/projet/:id" element={<Projet />} />

                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default router;