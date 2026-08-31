tailwind.config = {

    darkMode: "class",

    theme: {

        extend: {

            colors: {

                // =====================================================
                // PRIMARY BRAND COLORS
                // =====================================================

                primary: "#123B5D",
                "primary-dark": "#0B2A45",
                "primary-light": "#2B587A",

                "on-primary": "#FFFFFF",
                "primary-container": "#EAF2F8",
                "on-primary-container": "#123B5D",

                "primary-fixed": "#DCEAF4",
                "primary-fixed-dim": "#B9CFDF",
                "on-primary-fixed": "#09243A",
                "on-primary-fixed-variant": "#294D68",

                // =====================================================
                // GOLD / YELLOW ACCENTS
                // =====================================================

                gold: "#C9A84C",
                "gold-light": "#E5D29A",
                "gold-pale": "#FFF9E8",

                secondary: "#C9A84C",
                "on-secondary": "#123B5D",
                "secondary-container": "#FFF9E8",
                "on-secondary-container": "#6B5420",

                "secondary-fixed": "#F7E7B0",
                "secondary-fixed-dim": "#E5D29A",
                "on-secondary-fixed": "#3D2F0D",
                "on-secondary-fixed-variant": "#66551E",

                // =====================================================
                // TERTIARY
                // =====================================================

                tertiary: "#2B587A",
                "on-tertiary": "#FFFFFF",
                "tertiary-container": "#EAF2F8",
                "on-tertiary-container": "#123B5D",

                "tertiary-fixed": "#DCEAF4",
                "tertiary-fixed-dim": "#B9CFDF",
                "on-tertiary-fixed": "#09243A",
                "on-tertiary-fixed-variant": "#294D68",

                // =====================================================
                // SURFACES / BACKGROUNDS
                // =====================================================

                background: "#FFFFFF",
                surface: "#FFFFFF",

                "surface-bright": "#FFFFFF",
                "surface-dim": "#E8EEF3",

                "surface-container-lowest": "#FFFFFF",
                "surface-container-low": "#F8FAFC",
                "surface-container": "#F3F7FA",
                "surface-container-high": "#EAF2F8",
                "surface-container-highest": "#DFEAF1",

                "surface-blue": "#F3F7FA",
                "surface-blue-2": "#EAF2F8",
                "surface-yellow": "#FFF9E8",
                "surface-yellow-light": "#FFFCF3",

                "surface-variant": "#E2EAF0",

                // =====================================================
                // TEXT
                // =====================================================

                "on-background": "#172B3D",
                "on-surface": "#172B3D",
                "on-surface-variant": "#526273",

                "text-primary": "#123B5D",
                "text-body": "#334155",
                "text-muted": "#64748B",
                "text-light": "#94A3B8",

                // =====================================================
                // BORDERS / OUTLINES
                // =====================================================

                outline: "#CBD5E1",
                "outline-variant": "#E2E8F0",

                "outline-light": "#E2E8F0",
                "outline-gold": "#C9A84C",

                // =====================================================
                // BUTTON COLORS
                // =====================================================

                "btn-primary": "#123B5D",
                "btn-primary-hover": "#0B2A45",
                "btn-primary-border": "#C9A84C",

                "btn-secondary": "#FFFFFF",
                "btn-secondary-text": "#123B5D",
                "btn-secondary-border": "#C9A84C",

                // =====================================================
                // INVERSE COLORS
                // =====================================================

                "inverse-surface": "#0B2A45",
                "inverse-on-surface": "#F3F7FA",
                "inverse-primary": "#B9CFDF",

                // =====================================================
                // ERROR
                // =====================================================

                error: "#BA1A1A",
                "on-error": "#FFFFFF",
                "error-container": "#FFDAD6",
                "on-error-container": "#93000A",

                // =====================================================
                // BRAND OBJECT
                // =====================================================

                brand: {

                    navy: "#123B5D",
                    "navy-dark": "#0B2A45",
                    blue: "#2B587A",

                    gold: "#C9A84C",
                    "gold-light": "#E5D29A",
                    "gold-pale": "#FFF9E8",

                    surface: "#FFFFFF",
                    "surface-blue": "#F3F7FA",
                    "surface-blue-2": "#EAF2F8",

                    text: "#172B3D",
                    body: "#334155",
                    muted: "#64748B",

                },

            },

            // =========================================================
            // BORDER RADIUS
            // =========================================================

            borderRadius: {

                DEFAULT: "0.125rem",

                sm: "0.25rem",

                md: "0.375rem",

                lg: "0.5rem",

                xl: "0.75rem",

                "2xl": "1rem",

                card: "0.75rem",

                input: "0.5rem",

                btn: "0.5rem",

                full: "9999px",

            },

            // =========================================================
            // SPACING
            // =========================================================

            spacing: {

                "section-gap": "80px",

                "container-max": "1200px",

                gutter: "24px",

                unit: "8px",

                "margin-desktop": "48px",

                "margin-mobile": "16px",

            },

            // =========================================================
            // FONT FAMILY
            // =========================================================

            fontFamily: {

                "body-md": [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

                "headline-lg": [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

                "label-bold": [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

                "display-lg": [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

                "body-sm": [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

                "headline-lg-mobile": [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

                "body-lg": [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

                "headline-md": [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

                "cta-text": [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

                headline: [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

                display: [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

                body: [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

                label: [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

                sans: [
                    '"Public Sans"',
                    '"Public Sans Fallback"',
                    "sans-serif"
                ],

            },

            // =========================================================
            // FONT SIZES
            // =========================================================

            fontSize: {

                "body-md": [
                    "16px",
                    {
                        lineHeight: "24px",
                        fontWeight: "400"
                    }
                ],

                "headline-lg": [
                    "50px",
                    {
                        lineHeight: "54px",
                        fontWeight: "700"
                    }
                ],

                "label-bold": [
                    "12px",
                    {
                        lineHeight: "16px",
                        letterSpacing: "0.05em",
                        fontWeight: "700"
                    }
                ],

                "display-lg": [
                    "50px",
                    {
                        lineHeight: "normal",
                        fontWeight: "700"
                    }
                ],

                "body-sm": [
                    "14px",
                    {
                        lineHeight: "20px",
                        fontWeight: "400"
                    }
                ],

                "headline-lg-mobile": [
                    "26px",
                    {
                        lineHeight: "normal",
                        fontWeight: "700"
                    }
                ],

                "body-lg": [
                    "18px",
                    {
                        lineHeight: "28px",
                        fontWeight: "400"
                    }
                ],

                "headline-md": [
                    "30px",
                    {
                        lineHeight: "normal",
                        fontWeight: "700"
                    }
                ],

                "cta-text": [
                    "16px",
                    {
                        lineHeight: "24px",
                        fontWeight: "600"
                    }
                ],

            },

        },

    },

};