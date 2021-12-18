<template>
	<div>
		<form ref="form" class="email-form flex-column align-center">
			<p class="error" v-if="status_email === 'error'">Algo deu errado, Tente novamente!</p>
			<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M50 10H15C12.2425 10 10 12.2425 10 15V27.5H15V20L31 32C31.4329 32.3242 31.9592 32.4994 32.5 32.4994C33.0408 32.4994 33.5671 32.3242 34 32L50 20V42.5H30V47.5H50C52.7575 47.5 55 45.2575 55 42.5V15C55 12.2425 52.7575 10 50 10ZM32.5 26.875L16.665 15H48.335L32.5 26.875Z" fill="#F5F3F5"/>
				<path d="M5 30H22.5V35H5V30ZM10 37.5H25V42.5H10V37.5ZM17.5 45H27.5V50H17.5V45Z" fill="#F5F3F5"/>
			</svg>
			<div v-show="status_email === 'sent'" class="sent">
				<h2>Enviado com sucesso</h2>
				<svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M96.2394 9.50208L37.643 68.0985L18.6388 49.0943L0 67.733L19.0042 86.7373L37.7648 105.498L56.4037 86.859L115 28.2628L96.2394 9.50208Z" fill="#40B782"/>
				</svg>
			</div>
			<div v-show="status_email !== 'sent'" class="inputs flex justify-center">
				<div :class="status_email === 'sending' ? 'sending input' : 'input'">
					<input type="text" v-model="form.nome" name="nome" placeholder="Nome">
				</div>
				<div :class="status_email === 'sending' ? 'sending input' : 'input'">
					<input type="email" @change="validateEmail(form.email)" v-model="form.email" name="email" placeholder="Email">
				</div>
				<div :class="status_email === 'sending' ? 'sending input' : 'input'">
					<input type="number" v-model="form.contato" name="contato" placeholder="Nº Celular">
				</div>
				<div :class="status_email === 'sending' ? 'sending input' : 'input'">
					<input type="text" v-model="form.assunto" name="assunto" placeholder="Assunto">
				</div>
			</div>
			<textarea
				v-show="status_email !== 'sent'"
				:class="status_email === 'sending' ? 'sending' : ''"
				name="mensagem"
				placeholder="Mensagem"
				v-model="form.mensagem"
			/>
			<div
			 	v-show="status_email !== 'sent'"
				class="btn-email pointer"
				@click="sendEmail()"
				:style="!valid_form ? 'opacity: .4; background-color: var(--darker);' : ''"
			>
				<div v-if="status_email !== 'sending'">Enviar</div>
				<div class="loader" v-if="status_email === 'sending'"></div>
			</div>
		</form>
	</div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
	data() {
		return {
			form: {			
				nome: '',
				email: '',
				contato: '',
				assunto: '',
				mensagem: ''
			},
			valid_form: false,
			status_email: ''
		}
	},
	watch: {
		'form.nome'() {
			this.validForm(this.form)
		},
		'form.email'() {
			this.validForm(this.form)
		},
		'form.mensagem'() {
			this.validForm(this.form)
		}
	},
	methods: {
		validForm(form) {
			if (form.nome.length > 0 && this.validateEmail(form.email) === true && form.mensagem.length > 0) {
				this.valid_form = true
			} else {
				this.valid_form = false
			}
		},
		validateEmail(email) {
			var re = /\S+@\S+\.\S+/
			return re.test(email)
		},
		sendEmail() {
			if (this.valid_form === true) {
				this.status_email = 'sending'
				emailjs.sendForm('service_56dehbb', 'template_hd9tjua', this.$refs.form, 'user_u5S6Z7zg5xrNE3TSZldLO')
				.then((result) => {
				    console.log('SUCCESS!', result.text);
				    this.status_email = 'sent'
				    console.log(this.$refs.form)
				    this.form = {
				    		nome: '',
							email: '',
							contato: '',
							assunto: '',
							mensagem: ''
						}
					setTimeout(() => { this.$emit('close-modal', false) }, 5000)
				}, (error) => {
				    console.log('FAILED...', error.text);
				    this.status_email = 'error'
				});
			}
	    }
	}
}
</script>

<style>
.email-form {
	position: relative;
}
.email-form .error {
	position: absolute;
	top: 10px;
	color: rgba(230, 0, 0, .7);
	font-weight: 600;
}
.sent {
	margin-top: 20px;
}
.sent h2 {
	color: var(--primary);
}
.email-form {
	padding: 30px 20px;
	color: var(--light);
	gap: 30px;
	text-align: center;
}
.email-form .inputs {
	flex-wrap: wrap;
	gap: 15px;
	margin-bottom: -15px;
}
.email-form .input {
  position: relative;
}

.email-form input, .email-form textarea {
  width: 15em;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: transparent;
  padding: 0.70em 0.70em;
  border: 1px solid var(--light);
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
}
.email-form textarea {
	min-width: 240px;
	width: 94% !important;
	max-width: 57vw;
	min-height: 80px;
	max-height: 80px;
}
.email-form textarea::-webkit-scrollbar {
  width: 12px;
}

.email-form textarea::-webkit-scrollbar-track {
  background: var(--secondary);
}

.email-form textarea::-webkit-scrollbar-thumb {
  background-color: var(--primary);
  border-radius: 20px;
  border: 3px solid var(--secondary);
}
.email-form input:focus, .email-form textarea:focus {
  outline: none;
}

.email-form input::placeholder, .email-form textarea::placeholder {
  color: var(--light);
  opacity: .5;
}
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.btn-email {
	margin-top: -10px;
	background-color: var(--primary);
	padding: 16px 12px;
	min-width: 135px;
	border-radius: 8px;
	font-weight: 600;
	font-size: 18px;
	transition: all .2s ease-in-out;
}
.loader {
  border: 3px solid var(--light);
  border-top-color: var(--secondary);
  border-radius: 50%;
  width: 1em;
  height: 1em;
  margin: 0 auto;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.email-form .sending {
	opacity: .4;
}

</style>