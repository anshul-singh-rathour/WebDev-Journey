{#snippet link(title)}
<li class="group border-b-4 hover:bg-red-50">
  <a href="#" class="">{title}</a>
</li>
{/snippet}

<nav class="flex items-center justify-between border-red-200">
  <a href="/" class="text-xl font-extrabold">Unicorn Corp</a>
  <ul class="flex gap-8">
    {@render link('Home')} {@render link('About')} {@render link('Services')} {@render
    link('Contact')}
  </ul>
</nav>
