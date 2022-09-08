const ISSERVER = typeof window === 'undefined';

export const login = (miId, token) => {
    if(!ISSERVER) {
        localStorage.setItem('miId', miId);
        localStorage.setItem('token', token);
    }
}

export const logout = () => {
    if(!ISSERVER) {
        localStorage.removeItem('miId');
        localStorage.removeItem('token');
    }
}