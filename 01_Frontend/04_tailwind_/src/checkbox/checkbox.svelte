<script>
  const { label = 'A Very Important Checkbox', id = 'checkbox', ...props } = $props();
</script>

<div
  class="rounded bg-slate-200 p-4 outline outline-offset-4 outline-sky-400 focus-within:bg-sky-200"
>
  <input class="peer accent-purple-700" {...props} type="checkbox" />
  <label class="peer-checked:line-through" for="{id}">{label}</label>
</div>
