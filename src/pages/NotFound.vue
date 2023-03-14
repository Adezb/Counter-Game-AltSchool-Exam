<template>
    <div class="error__page">
        <h1> 404</h1>
        <h2>Page not found</h2>
        <span class="error__navigate-home">
            <router-link class="home__link" to="/">Go back to Home</router-link>

        </span>

    </div>
</template>

<style scoped>
.error__page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    height: 70vh;
    background: #d9deff;
    /* background-color: #f1eeee; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.error__page h1 {
    font-size: 5rem;
    font-weight: 800;
    margin-bottom: 1rem;
}

.error__page h2 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 1rem;
}

.error__page .error__navigate-home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background: #a6c1ee;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.error__page .error__navigate-home .home__link {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.error__page .error__navigate-home .home__link:hover {
    color: #000;
    text-decoration: none;
}
</style>