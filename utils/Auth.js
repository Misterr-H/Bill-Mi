const ISSERVER = typeof window === 'undefined';

export const login = (miId, token) => {
    if(!ISSERVER) {
        localStorage.setItem('miId', miId);
        localStorage.setItem('token', token);
    }
}

export const logout = () => {
    if(!ISSERVER) {
        localStorage.removeItem('name');
        localStorage.removeItem('miId');
        localStorage.removeItem('token');
    }
}

export const headers = {
    'Authorization': `Bearer ${!ISSERVER ? localStorage.getItem('token') : null}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

export const isLoggedIn = () => {
    if(!ISSERVER) {
        const miId = localStorage.getItem('miId');
        const token = localStorage.getItem('token');
        if(miId && token)
            return true;
        else
            return false;
    }
    else {
        return false;
    }
}

export const getName = async () => {
    if(!ISSERVER) {
        let token = localStorage.getItem('token');
        let name = localStorage.getItem('name');
        if(token && !name) {
            const res = await fetch('/api/user/fetch-user-details', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const data = await res.json();
            if(data.status === 'success') {
                localStorage.setItem('name', data.data.name);
                console.log("API cALLEd",data.data.name);
                return data.data.name;
            }
            else {
                return null;
            }
        }
        else if(name) {
            return name;
        }
        else {
            return null;
        }
    }
}

export const isAuthenticated = async () => {
    if(!ISSERVER) {
        let token = localStorage.getItem('token');
        if(token) {
            const res = await fetch('/api/auth/verify-jwt', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const data = await res.json();
            if(data.status === 'success') {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}

export const getMiId = () => {
    if(!ISSERVER) {
        return localStorage.getItem('miId');
    }
}