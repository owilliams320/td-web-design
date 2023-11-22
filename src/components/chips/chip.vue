<template>
    <button :class="classes" :aria-label="label" :active="active">{{ label }}</button>
</template>
<script lang="ts" setup>
import { computed } from 'vue';


const props = defineProps<{ label?: string, active?: boolean }>();

const classes = computed(()=>({
    'button': true,
    'active': props.active

})) 

</script>
<style lang="scss" scoped>
.button  {
    background-color: transparent;
    border: 1px solid #b2b9c0;
    color: #00233c;
    border-radius: 25px;
    font-weight: 600;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    padding: 12px 16px;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: all .25s ease-in-out 0s;

    &.active {
        background: #00233c;
        border-color: #00233c;
        color: #ffffff;
    }

    &:hover {
        border-color: #00233c;
    }
}
</style>