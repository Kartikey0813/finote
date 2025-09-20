// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         bg: '#0b0f11',
//         panel: '#0f1518',
//         'panel-lite': '#161c20',
//         accent: '#24d3b8'
//       },
//       fontFamily: {
//         sans: ['Inter', 'system-ui', 'sans-serif']
//       }
//     }
//   },
//   plugins: []
// };


// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e6f6ff',
          400: '#06b6d4',
          500: '#0891b2',
          600: '#0369a1'
        }
      },
      boxShadow: {
        'card-lg': '0 10px 30px rgba(16,24,40,0.08)',
        'card-sm': '0 6px 16px rgba(16,24,40,0.06)'
      }
    }
  },
  plugins: []
};


    
