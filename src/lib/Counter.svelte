<script>
  let count = $state(0)
  const increment = () => {
    count += 1
  }
</script>

<button onclick={increment} class="bg-primary text-white font-button py-2 px-4 rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-200">
  count is {count}
</button>
