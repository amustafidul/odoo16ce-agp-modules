# AGP Modern Theme IB

## Deskripsi
Module custom backend theme untuk Odoo 16 Community yang menekankan keindahan dan modernitas.

## Fitur Utama
- **Dashboard Home Menu**: Tampilan menu aplikasi dengan layout kotak-kotak (grid), bukan dropdown
- **Modern UI untuk Semua View**:
  - Form View dengan desain elegan dan shadow effects
  - Tree/List View dengan header gradient dan row hover effects
  - Kanban View dengan card animations
  - Calendar View dengan styling modern
  - Search View dengan border focus yang menarik
- **Beautiful Color Scheme**: Menggunakan palet warna indigo modern dengan accent pink dan cyan
- **Smooth Transitions**: Animasi halus pada semua elemen interaktif
- **Responsive Design**: Tampilan optimal di berbagai ukuran layar
- **Custom Scrollbar**: Scrollbar dengan gradient warna tema
- **Elegant Shadows**: Shadow effects yang memberikan kedalaman visual

## Struktur Module
```
agp_modern_theme_ib/
├── __init__.py
├── __manifest__.py
├── static/
│   └── src/
│       ├── js/
│       │   └── theme.js          # JavaScript enhancements
│       └── scss/
│           └── theme.scss        # SCSS styling (530+ lines)
└── views/
    ├── webclient_templates.xml   # Web client customization
    ├── menu_templates.xml        # Dashboard menu grid layout
    └── view_templates.xml        # All view customizations
```

## Instalasi
1. Copy folder `agp_modern_theme_ib` ke direktori addons Odoo Anda
2. Update daftar module dari menu Apps > Update Apps List
3. Cari "AGP Modern Theme IB" dan klik Install
4. Refresh browser untuk melihat perubahan

## Cara Kerja
- Module ini meng-override template standar Odoo menggunakan XPath inheritance
- SCSS menyediakan styling modern dengan CSS variables dan gradients
- JavaScript menambahkan interaksi dan animasi yang smooth
- Dashboard menu menggantikan dropdown tradisional dengan grid layout yang lebih visual

## Warna Tema
- Primary: Indigo (#6366f1)
- Secondary: Pink (#ec4899)
- Accent: Cyan (#06b6d4)
- Background: Light gray dengan gradient
- Text: Slate color palette

## Kompatibilitas
- Odoo 16 Community Edition
- Browser modern (Chrome, Firefox, Safari, Edge)

## Lisensi
LGPL-3

## Author
AGP IB

## Version
16.0.1.0.0
