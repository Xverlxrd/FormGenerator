<template>
  <div class="app-container">
    <nav class="navigation">
      <router-link
          to="/register"
          class="nav-link"
          active-class="active"
      >
        Регистрация
      </router-link>
      <router-link
          to="/feedback"
          class="nav-link"
          active-class="active"
      >
        Фидбек
      </router-link>
    </nav>
    <router-view class="page-content" />
  </div>
</template>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.navigation {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.nav-link {
  padding: 8px 16px;
  text-decoration: none;
  color: #2c3e50;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #f5f5f5;
}

.page-content {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>