// Action types
export const ADD_SUPPLIERS = "ADD_SUPPLIERS";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const ADD_PROJECTS = "ADD_PROJECTS";
export const INIT_SESSION = "INIT_SESSION";

// Action creators
export function addSuppliers(payload) {
    return { type: ADD_SUPPLIERS, payload }
};

export function addProducts(payload) {
    return { type: ADD_PRODUCTS, payload }
};

export function addProjects(payload) {
    return { type: ADD_PROJECTS, payload }
};

export function initSession(payload){
    return {type: INIT_SESSION, payload }
}