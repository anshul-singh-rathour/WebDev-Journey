<script>
  const { label = 'Button', ...props } = $props();
</script>

<button
  class="rounded-md bg-white px-1.5 py-1.5 shadow-md shadow-blue-500 outline-4 outline-amber-700"
  {...props}
>
  {label}
</button>