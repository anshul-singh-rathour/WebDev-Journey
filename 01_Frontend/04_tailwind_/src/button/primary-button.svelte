<script>
  const { label = 'Button', ...props } = $props();
</script>

<button
  {...props}
  class="rounded-md bg-blue-600 px-4 py-1.5 text-white shadow-md shadow-amber-500 hover:bg-blue-500"
>
  Button
</button>
