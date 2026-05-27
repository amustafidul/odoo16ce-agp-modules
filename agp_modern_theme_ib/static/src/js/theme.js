// AGP Modern Theme - JavaScript Enhancements
odoo.define('agp_modern_theme_ib.theme', function (require) {
    "use strict";

    const core = require('web.core');
    const session = require('web.session');
    const AbstractAction = require('web.AbstractAction');

    // Initialize modern theme features
    $(document).ready(function() {
        initModernTheme();
    });

    function initModernTheme() {
        // Add smooth transitions to all interactive elements
        addSmoothTransitions();
        
        // Initialize app menu dashboard
        initAppMenuDashboard();
        
        // Enhance form views
        enhanceFormViews();
        
        // Enhance tree/list views
        enhanceTreeViews();
        
        // Enhance kanban views
        enhanceKanbanViews();
        
        console.log('AGP Modern Theme initialized successfully');
    }

    function addSmoothTransitions() {
        $('body').addClass('agp-smooth-transitions');
        
        // Add hover effects to buttons
        $('.btn, .o_button').on('mouseenter', function() {
            $(this).addClass('agp-btn-hover');
        }).on('mouseleave', function() {
            $(this).removeClass('agp-btn-hover');
        });
    }

    function initAppMenuDashboard() {
        // Handle app menu clicks for dashboard style
        $('.agp-app-item').on('click', function() {
            const menuId = $(this).data('menu-id');
            if (menuId) {
                // Trigger menu action with smooth animation
                $(this).addClass('agp-app-selected');
                setTimeout(() => {
                    $(this).removeClass('agp-app-selected');
                }, 300);
            }
        });

        // Add tooltip to app items
        $('.agp-app-item').each(function() {
            const appName = $(this).find('.agp-app-name').text();
            $(this).attr('title', appName);
        });
    }

    function enhanceFormViews() {
        // Add modern styling to form fields
        $('.agp-modern-form-view').on('mouseenter', '.o_field_widget', function() {
            $(this).addClass('agp-field-focus');
        }).on('mouseleave', '.o_field_widget', function() {
            $(this).removeClass('agp-field-focus');
        });

        // Enhance sheet appearance
        $('.agp-modern-sheet').addClass('agp-shadow-elegant');
    }

    function enhanceTreeViews() {
        // Add row hover effects
        $('.agp-modern-table tbody tr').on('mouseenter', function() {
            $(this).addClass('agp-row-hover');
        }).on('mouseleave', function() {
            $(this).removeClass('agp-row-hover');
        });

        // Add striped effect
        $('.agp-modern-table tbody tr:nth-child(even)').addClass('agp-row-striped');
    }

    function enhanceKanbanViews() {
        // Add card hover effects
        $('.agp-modern-kanban-renderer .o_kanban_record').on('mouseenter', function() {
            $(this).addClass('agp-kanban-card-hover');
        }).on('mouseleave', function() {
            $(this).removeClass('agp-kanban-card-hover');
        });

        // Add elegant shadow to kanban cards
        $('.agp-modern-kanban-renderer .o_kanban_record').addClass('agp-card-shadow');
    }

    // Extend AbstractAction for modern UI enhancements
    AbstractAction.include({
        init: function(parent, action) {
            this._super.apply(this, arguments);
            // Additional initialization for modern theme
        },

        start: function() {
            return this._super.apply(this, arguments).then(() => {
                // Apply modern theme after action starts
                applyModernThemeToAction();
            });
        }
    });

    function applyModernThemeToAction() {
        // Dynamically apply modern classes to new content
        setTimeout(() => {
            enhanceFormViews();
            enhanceTreeViews();
            enhanceKanbanViews();
        }, 100);
    }

});
