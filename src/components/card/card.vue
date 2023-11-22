<template>
    <div class="card">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 1px solid #ced3da;
    border-radius: 12px;
    overflow: hidden;
    transition: .25s;
    text-decoration: none;
    height: 100%;
    width: 100%;
    margin: auto;
    text-align: left;
    position: relative;

    .content {
        padding: 1.5rem;
    }

    &:after {
        display: block;
        content: "";
        border-bottom: 2px solid #ff5f02;
        transform: scaleX(0);
        transform-origin: 0 50%;
        transition: transform .25s ease-in-out;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
    }

    &:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,.12);
        &::after {
            transform: scaleX(1);
        }
    }
}
</style>