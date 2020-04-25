<template>
  <div class="my-container">
    <div class="opening-hours">
        <span>Welcome to KairHealth</span>
        <span>-</span>
        <span> Treatment in India Made Easy</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-container {
    display: flex;
    justify-content: center;
    border-bottom-color: #ecf1f2;
    border-bottom: 1px solid #ecf1f2;

    @media (max-width: 576px) {
        display: none;
    }
}

.opening-hours {
    font-weight: 300;
    font-size: 1em;
    padding: 1em 0em;

    :nth-child(1) {
        color: #7d98ad;
    }

    :nth-child(3) {
        color: #2f3d4a;
    }
}
</style>
