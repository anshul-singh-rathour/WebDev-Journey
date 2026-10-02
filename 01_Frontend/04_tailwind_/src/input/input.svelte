<script>
  const { id = 'input', label, description, error, ...props } = $props();
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;
</script>

<div class="group space-y-1">
  <label
    class="text-slate-600v after:ml-2b block font-medium after:h-2 after:w-2 after:text-red-500 group-has-[input:required]:after:content-['*']"
    for="{id}"
  >
    {label}
  </label>
  <input
    class="block flex rounded bg-white px-2 py-1 outline outline-slate-400 focus:outline-4 focus:outline-blue-400"
    {id}
    aria-describedby="{descriptionId}"
    aria-invalid="{!!error}"
    aria-errormessage="{errorId}"
    {...props}
  />
  {#if description}
  <p id="{descriptionId}">{description}</p>
  {/if} {#if error}
  <p id="{errorId}">{error}</p>
  {/if}
</div>
