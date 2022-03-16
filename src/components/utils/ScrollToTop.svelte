<script lang="ts">
  let visible = false;
  let y = 0;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    y = 0;
    visible = false;
  };

  const toggleVisibility = () => {
    if (y > 500) {
      visible = true;
    } else {
      visible = false;
    }
  };
</script>

<svelte:window on:scroll={toggleVisibility} bind:scrollY={y} />

{#if visible}
  <div
    on:click={scrollToTop}
    class="fixed animate-slide-in-bottom bottom-6 right-6 xl:right-1/4 p-1 bg-purple-400 font-bold rounded-md hover:cursor-pointer hover:shadow-lg"
  >
    <img
      class="!m-0 opacity-80"
      src="https://img.icons8.com/material-rounded/24/000000/up.png"
      alt="scroll to top"
    />
  </div>
{/if}
