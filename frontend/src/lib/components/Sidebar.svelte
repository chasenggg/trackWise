<script>
  import { page } from '$app/stores';
</script>

<aside class="sidebar">
  <a href="/" class:active={$page.url.pathname === '/'}>Home</a>
  <a href="/surveys" class:active={$page.url.pathname.startsWith('/surveys')}>Surveys</a>
  <a href="/responses" class:active={$page.url.pathname.startsWith('/responses')}>Responses</a>
</aside>

<style>
  .sidebar {
    width: 200px;
    background: #f5f5f5;
    padding: 1rem;
  }
  .sidebar a {
    display: block;
    padding: 0.5rem;
    text-decoration: none;
    color: black;
  }
  .sidebar a.active {
    font-weight: bold;
    color: #007bff;
  }
</style>
