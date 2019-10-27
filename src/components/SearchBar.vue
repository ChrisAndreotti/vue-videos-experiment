<template>
    <div class="form-group">
        <label for="searchInput">Search for YouTube videos:</label>
        <input id="searchInput" class="form-control" @keydown.enter="onInput" placeholder="Enter a search term and hit enter" />
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput: function(event) {
            this.$emit('termChange', event.target.value);
        }
    }
}
</script>

<style scoped>
    input {
        width: 75%;
    }

    div {
        margin: 20px;
    }
</style>