/*
╔════════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   CMH IBU DASHBOARD - CONFIGURATION FILE                                     ║
║                                                                              ║
║   This is the ONLY file you need to edit to update the dashboard.            ║
║   You do NOT need to touch index.html or styles.css.                         ║
║                                                                              ║
║   WHAT YOU CAN CHANGE HERE:                                                  ║
║   • Add or remove Therapy Areas      (Section 1)                             ║
║   • Add or remove Insight Types      (Section 2)                             ║
║   • Add or remove Countries          (Section 3)                             ║
║   • Add or update Power BI links     (Section 4)                             ║
║                                                                              ║
║   HOW TO FIND THINGS:                                                        ║
║   Search for "SECTION 1", "SECTION 2", etc. to jump to each part.           ║
║                                                                              ║
║   IMPORTANT RULES:                                                           ║
║   • Every line that has data must end with a comma (except the last item)    ║
║   • Text values must be wrapped in quotes: 'like this'                       ║
║   • Don't change the field names (id, name, iconClass, etc.)                 ║
║   • When in doubt, copy an existing entry and modify it                      ║
║                                                                              ║
╚════════════════════════════════════════════════════════════════════════════════╝
*/


/* ============================================================================
   SECTION 1: THERAPY AREAS
   ============================================================================
   These are the buttons shown in Step 1 of the page.
   
   To ADD a new therapy area, copy an existing block and change:
     - id:        A short unique code (lowercase, no spaces). Example: 'alzh'
     - name:      The display name. Example: 'Alzheimer\'s'
     - iconClass: The color for the icon. Options:
                    'icon-teal'   (green-blue)
                    'icon-purple' (purple)
                    'icon-amber'  (orange)
                    'icon-blue'   (blue)
     - icon:      The SVG icon code (copy from an existing one if unsure)

   To REMOVE a therapy area, delete the entire block from { to },
   ============================================================================ */

const THERAPY_AREAS = [
    {
        id: 'cwm',
        name: 'Chronic Weight Management',
        iconClass: 'icon-teal',
        icon: `<svg viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"/>
            <path d="M12 10v6"/>
            <path d="M9 21l3-3 3 3"/>
            <path d="M7 13l5 2 5-2"/>
        </svg>`
    },
    {
        id: 't2d',
        name: 'Type 2 Diabetes',
        iconClass: 'icon-purple',
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`
    }

    /*  ── EXAMPLE: How to add a new therapy area ──────────────────────────
    ,
    {
        id: 'alzh',
        name: 'Alzheimer\'s',
        iconClass: 'icon-blue',
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`
    }
    ──────────────────────────────────────────────────────────────────────── */
];


/* ============================================================================
   SECTION 2: INSIGHT TYPES
   ============================================================================
   These are the buttons shown in Step 2 of the page.
   
   To ADD a new insight type, copy an existing block and change:
     - id:         A short unique code. Example: 'payer'
     - name:       The display name. Example: 'Payer Insights'
     - subtext:    Optional label shown below the name. Use null for none.
     - isBHT:      true or false. If true, country buttons will say "BHT Dashboard".
     - iconClass:  Color for the icon (same options as therapy areas above).
     - icon:       The SVG icon code.
     - enabled:    true = clickable, false = greyed out.
     - comingSoon: true = shows "(coming soon)" label, false = no label.

   To REMOVE an insight type, delete the entire block from { to },
   ============================================================================ */

const INSIGHT_TYPES = [
    {
        id: 'hcp',
        name: 'HCP Insights',
        subtext: 'BHT (Brand Health Tracking)',
        isBHT: true,
        iconClass: 'icon-blue',
        icon: `<svg viewBox="0 0 24 24"><path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
        enabled: true,
        comingSoon: false
    },
    {
        id: 'consumer',
        name: 'Consumer Insights',
        subtext: null,
        isBHT: false,
        iconClass: 'icon-amber',
        icon: `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"/></svg>`,
        enabled: false,
        comingSoon: true
    }

    /*  ── EXAMPLE: How to add a new insight type ──────────────────────────
    ,
    {
        id: 'payer',
        name: 'Payer Insights',
        subtext: null,
        isBHT: false,
        iconClass: 'icon-teal',
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
        enabled: true,
        comingSoon: false
    }
    ──────────────────────────────────────────────────────────────────────── */
];


/* ============================================================================
   SECTION 3: COUNTRIES
   ============================================================================
   This is the master list of all countries that could appear in Step 3.
   A country only shows up if it has an entry in DASHBOARD_LINKS (Section 4).
   
   To ADD a new country:
     - id:       A short unique code (2-3 letters). Example: 'kr'
     - name:     The display name. Example: 'South Korea'
     - flagCode: The 2-letter country code for the flag image.
                 The flag is automatically loaded from the internet using this code,
                 so it must be the correct code — no image uploads needed.

                 HOW TO FIND THE RIGHT CODE:
                 1. Go to: https://flagcdn.com
                 2. Scroll down to the country list — codes are shown next to each country name.
                 3. Use that 2-letter code as the flagCode value.

                 WATCH OUT — some codes are not what you'd expect:
                   'gb' = UK (not 'uk')
                   'es' = Spain (not 'sp')
                   'sa' = Saudi Arabia (not 'ksa')
                   'kr' = South Korea
                   'us' = USA

                 QUICK CHECK: Once added, paste this into your browser to verify the flag loads:
                 https://flagcdn.com/w80/YOUR_CODE_HERE.png
                 (Replace YOUR_CODE_HERE with the code you used, e.g. https://flagcdn.com/w80/kr.png)

   To REMOVE a country, delete the entire line { id: ..., name: ..., flagCode: ... },
   ============================================================================ */

const COUNTRIES = [
    { id: 'jp', name: 'Japan',        flagCode: 'jp' },
    { id: 'ca', name: 'Canada',       flagCode: 'ca' },
    { id: 'au', name: 'Australia',    flagCode: 'au' },
    { id: 'it', name: 'Italy',        flagCode: 'it' },
    { id: 'sp', name: 'Spain',        flagCode: 'es' },
    { id: 'fr', name: 'France',       flagCode: 'fr' },
    { id: 'de', name: 'Germany',      flagCode: 'de' },
    { id: 'ksa', name: 'Saudi Arabia', flagCode: 'sa' },
    { id: 'mx', name: 'Mexico',       flagCode: 'mx' },
    { id: 'pl', name: 'Poland',       flagCode: 'pl' },
    { id: 'br', name: 'Brazil',       flagCode: 'br' },
    { id: 'uk', name: 'UK',           flagCode: 'gb' },
    { id: 'in', name: 'India',        flagCode: 'in' }

    /*  ── EXAMPLE: How to add a new country ───────────────────────────────
    ,
    { id: 'kr', name: 'South Korea', flagCode: 'kr' }
    ──────────────────────────────────────────────────────────────────────── */
];


/* ============================================================================
   SECTION 4: DASHBOARD LINKS (Power BI URLs)
   ============================================================================
   This is where the hierarchy lives:
   
       Therapy Area → Insight Type → Country → Link details
   
   STRUCTURE EXPLAINED:
   
       'therapy_area_id': {
           'insight_type_id': {
               'country_id': {
                   url:    'the Power BI URL',
                   status: 'present' or 'planned' or 'in-progress',
                   brand:  'brand name' (optional, for reference)
               }
           }
       }
   
   STATUS OPTIONS:
     'present'     = Dashboard is live → country button is clickable
     'planned'     = Dashboard is planned → country button is greyed out, shows "Planned" badge
     'in-progress' = Dashboard is being built → country button is greyed out, shows "In Progress" badge
   
   TO ADD A NEW DASHBOARD LINK:
     Find the right therapy area and insight type, then add a new country entry.
   
   TO ADD A NEW THERAPY AREA'S LINKS:
     Add a new block following the same pattern as 'cwm' or 't2d' below.
   ============================================================================ */

const DASHBOARD_LINKS = {

    /* ── Chronic Weight Management ──────────────────────────────────────── */
    'cwm': {

        /* CWM → HCP Insights */
        'hcp': {
            'jp': {
                url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/64f3a50d-338f-4d80-80e0-a1d9ef4e1246/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Zepbound'
            },
            'ca': {
                url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/e3ed644a-767b-42d3-bbc8-e41e4a09b49d/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Zepbound'
            },
            'au': {
                url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/90313a92-1b7f-406e-bf8a-1853ca1d4873/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'it': {
                url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/9436f075-273c-4906-b9a9-ac34fbdb5c19/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'sp': {
                url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/00ab767a-6891-4e38-a45e-708372714213/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'fr': {
                url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/f02a8cde-6f31-44d3-94da-d0d4e15d7aae/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'de': {
                url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/27400042-c2ac-4fc2-8378-e1c669ea2127/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'ksa': {
                url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/4145f1b7-8ded-4c82-905d-24ab96b68590/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'mx': {
                url: '#',
                status: 'planned',
                brand: 'Mounjaro'
            },
            'pl': {
                url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/214ce768-98b4-4d9a-b3a9-e19a3e76ef51/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'br': {
                url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/a79dd520-a5a9-48c9-a203-b6cec86803a5/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'uk': {
                url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/53fcdf20-e988-4ad9-ac55-d7e72092a689/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'in': {
                url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/dab7a550-68e5-4455-a90a-c18f9bedd182/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            }
        },

        /* CWM → Consumer Insights */
        'consumer': {
            'jp':  { url: '#', status: 'planned' },
            'ca':  { url: '#', status: 'planned' },
            'au':  { url: '#', status: 'planned' },
            'it':  { url: '#', status: 'planned' },
            'sp':  { url: '#', status: 'planned' },
            'fr':  { url: '#', status: 'planned' },
            'de':  { url: '#', status: 'planned' },
            'ksa': { url: '#', status: 'planned' },
            'mx':  { url: '#', status: 'planned' },
            'br':  { url: '#', status: 'planned' },
            'uk':  { url: '#', status: 'planned' },
            'in':  { url: '#', status: 'planned' }
        }
    },

    /* ── Type 2 Diabetes ────────────────────────────────────────────────── */
    't2d': {

        /* T2D → HCP Insights */
        'hcp': {
            'jp': {
                url: 'https://app.powerbi.com/groups/me/reports/5cfc0291-f081-4b23-8572-284c6ae38a5c/f8cc4edea49686754007?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'ca': {
                url: 'https://app.powerbi.com/groups/me/reports/116178e2-5642-4fc2-a13b-6f66b0b6d4cc/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'au': {
                url: 'https://app.powerbi.com/groups/3a61e410-5f65-447c-b96d-cd1439dada74/reports/9dd9caed-3e73-4d4f-a636-66f6966835bb/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'it': {
                url: 'https://app.powerbi.com/groups/me/reports/3fb555ff-8766-4f6a-a4fc-5d1909a0d9c3/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'sp': {
                url: 'https://app.powerbi.com/groups/me/reports/3bf36fb8-53c1-4001-bae5-aeb003c0cd7f/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'fr': {
                url: 'https://app.powerbi.com/groups/me/reports/dac11b86-ae69-4337-8f3b-0acaa6fabe93/f8cc4edea49686754007?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'de': {
                url: 'https://app.powerbi.com/groups/me/reports/9a9ea58b-568e-49b9-9d85-2556c7e68f73/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'ksa': {
                url: 'https://app.powerbi.com/groups/me/reports/6137c573-d15c-454b-9a87-1cd40c8ce871/f8cc4edea49686754007?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'mx': {
                url: 'https://app.powerbi.com/groups/me/reports/834c4844-dbe0-49c0-b0b1-0ab6fd0a8b46/f8cc4edea49686754007?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'pl': {
                url: '#',
                status: 'planned',
                brand: 'Mounjaro'
            },
            'br': {
                url: 'https://app.powerbi.com/groups/me/reports/5a32f186-c1c4-4ee0-9623-91e571a3e78f/f8cc4edea49686754007?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'uk': {
                url: 'https://app.powerbi.com/groups/me/reports/faddb2e5-f408-4224-b9de-5823ba389ab3/f8cc4edea49686754007?ctid=18a59a81-eea8-4c30-948a-d8824cdc2580&experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            },
            'in': {
                url: 'https://app.powerbi.com/groups/me/reports/ffbc8dd6-be5a-4288-9fa5-4ce35911a433/f8cc4edea49686754007?experience=power-bi',
                status: 'present',
                brand: 'Mounjaro'
            }
        },

        /* T2D → Consumer Insights */
        'consumer': {
            'uk':  { url: '#', status: 'planned' },
            'de':  { url: '#', status: 'planned' },
            'br':  { url: '#', status: 'planned' },
            'fr':  { url: '#', status: 'planned' },
            'sp':  { url: '#', status: 'planned' },
            'ksa': { url: '#', status: 'planned' },
            'it':  { url: '#', status: 'planned' },
            'mx':  { url: '#', status: 'planned' }
        }
    }

    /*  ── EXAMPLE: How to add a new therapy area's links ──────────────────
    ,
    'alzh': {
        'hcp': {
            'de': {
                url: 'https://app.powerbi.com/groups/...',
                status: 'present',
                brand: 'BrandName'
            },
            'uk': {
                url: '#',
                status: 'planned',
                brand: 'BrandName'
            }
        }
    }
    ──────────────────────────────────────────────────────────────────────── */
};


/* ============================================================================
   HELPER FUNCTION - Do not modify
   ============================================================================ */
function getFlagUrl(flagCode) {
    return `https://flagcdn.com/w80/${flagCode}.png`;
}
