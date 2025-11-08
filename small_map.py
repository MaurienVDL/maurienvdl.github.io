# -*- coding: utf-8 -*-
"""
Created on Sat Nov  8 21:03:48 2025

@author: Maurien van der Lind
"""

import folium

# Center on Bocas del Toro, Panama
location = [9.32806779090854, -82.21827582196846]

# Create a small map
m = folium.Map(
    location=location,
    zoom_start=10,
    tiles="Esri.WorldImagery",  # Satellite imagery from Esri
    width=400,
    height=300
)

# Optional: add a marker
folium.Marker(
    location,
    popup="Bocas del Toro, Panama",
    tooltip="Ankay Conservation Centre"
).add_to(m)

# Save to HTML
m.save("bocas_del_toro_satellite.html")
