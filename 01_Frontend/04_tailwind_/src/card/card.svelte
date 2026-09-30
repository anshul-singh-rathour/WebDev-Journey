<script>
  const { title = 'Card Title', description = '' } = $props();
</script>

<div class="rounded-md border-2 border-black bg-yellow-100 p-5">
  <h2 class="text-lg font-semibold">{title}</h2>
  <p class="mt-1">{description}</p>
</div>
