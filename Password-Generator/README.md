# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Password Generator uses the concept of 4 React hooks: useState (to change the state of the props), useEffect (to synchronize the workflow and call to a particular list of items on change repeatedily), useRef (to provide the reference to the variable to provide some interaction with the use on selective items) and useCallback (this hook provides the concept of memoization to store the lastly updated state in the cache to execute the provoded list of items on their change).
