<template>
	<div class="btn pointer" @click="eventBtn()">
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
	},
	methods: {
	    eventBtn() {
	      this.$emit('event-btn')
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
.btn a {
	color: var(--btn-header);	
}
.btn:hover, .btn:hover a {
	color: var(--header-bg);
	background-position: 0;
}
.banner .btn {
	border: solid 2px var(--light);
	color: var(--light);
    background: var(--secondary);
    background-image: linear-gradient(45deg, var(--light) 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    padding: 15px 35px;
}
.banner .btn a {
	color: var(--light);	
}
.banner .btn:hover {
	color: var(--secondary);
	background-position: 0;
}
.banner .btn:hover a {
	color: var(--secondary);
}
</style>