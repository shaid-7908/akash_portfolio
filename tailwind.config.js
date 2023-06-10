/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        heroColor:'rgba(152, 192, 213, 1)'
        
      },
      keyframes:{
        slideinR:{
          '0%':{ transform:'translateX(42px)'},
          '100%':{transform:'translateX(0)'}
        },
        slideinL:{
          '0%':{ transform:'translateX(-42px)'},
          '100%':{transform:'translateX(0)'}
        },
        wavinghand: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        },
        textupdown:{
          '0%':{transform : 'translateY(-10px)'},
          '10%':{transform : 'translateY(-10px)'},

          '20%':{transform : 'translateY(-65px)'},
          '30%':{transform : 'translateY(-65px)'},
          '40%':{transform:'translateY(-120px)'},
          '50%':{transform:'translateY(-120px)'},
          '60%':{transform:'translateY(-65px)'},          
          '70%':{transform:'translateY(-65px)'},          
          '80%':{transform:'translateY(-10px)'},
          '100%':{transform:'translateY(-10px)'}
        }
      },
      animation:{
        slideinR:'slideinR 1s ease-in-out',
        wavinghand:'wavinghand 2s linear infinite',
        slideinL:'slideinL 1s ease-in-out',
        textupdown:'textupdown 10s linear infinite'
      }

    },
  },
  plugins: [],
}