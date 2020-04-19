<template>
    <div>
        <az-components-header></az-components-header>
        <az-components-nav></az-components-nav>
    </div>
</template>

<script>
import Public from '../assets/css/public.css';
import AzComponentsHeader from "../components/components/AzComponentsHeader";
import AzComponentsNav from "../components/components/AzComponentsNav";
export default {
    name:"components",
    components:{AzComponentsHeader,AzComponentsNav}
}
</script>

<style>

</style>
