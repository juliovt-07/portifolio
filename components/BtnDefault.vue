<template>
	<div class="btn pointer">
		{{ title }}
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'BtnDefault'
		}
	}
}
</script>

<style>
.btn {
	padding: 10px 30px;
	border-radius: 50px;
	border: solid 2px var(--btn-header);
	color: var(--btn-header);
	font-weight: 500;
	font-size: 15px;
	-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: var(--header-bg);
    background-image: linear-gradient(45deg, var(--btn-header) 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 300ms ease-in-out;
    transition: background .3s ease-in-out;
}
.btn:hover {
	color: var(--light);
	background-position: 0;
}
</style>