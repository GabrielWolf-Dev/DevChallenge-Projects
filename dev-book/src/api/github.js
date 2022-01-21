const topUsers = async () => {
    const url = 'https://api.github.com/users';
    const res = await fetch(url);
    
    return await res.json();
};

const repoUser = async (name) => {
    const url = `https://api.github.com/users/${name}/repos?per_page=8`;
    const res = await fetch(url);
    
    return await res.json();
};

const searchUser = async (name = '') => {
    const url = `https://api.github.com/search/users?q=${name}`;
    const res = await fetch(url);
    
    return await res.json();
};

export {
    topUsers,
    repoUser,
    searchUser,
};
