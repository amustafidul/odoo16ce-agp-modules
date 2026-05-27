{
    "name": "AGP Modern Theme IB",
    "description": """
        Modern and Beautiful Backend Theme for Odoo 16 Community
        Features:
        - Dashboard-style home menu with grid layout (no dropdown)
        - Modern UI for all views (form, tree, kanban, calendar, dashboard)
        - Beautiful color scheme and modern design elements
        - Responsive and user-friendly interface
    """,
    "version": "16.0.1.0.0",
    "author": "AGP IB",
    "license": "LGPL-3",
    "category": "Themes/Backend",
    "depends": ["web"],
    "data": [
        "views/webclient_templates.xml",
        "views/menu_templates.xml",
        "views/view_templates.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "agp_modern_theme_ib/static/src/scss/theme.scss",
            "agp_modern_theme_ib/static/src/js/theme.js",
        ],
    },
    "installable": True,
    "application": False,
    "auto_install": False,
}
