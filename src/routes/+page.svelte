<script>
	import { onMount } from 'svelte';

	let currentTime = '';
	let showMenu = false;

	const projects = [
		{
			name: 'Crypto Update',
			description:
				'Aplicación para ver el precio de las criptomonedas en tiempo real,hecho con React y TailwindCSS.',
			image: '/project/crypto.png',
			github: 'https://github.com/leonelhv/crypto-react',
			web: 'https://crypto-react-silk.vercel.app/'
		},
		{
			name: 'Movie Night',
			description:
				'Aplicación para buscar las peliculas mas populares y sus detalles,hecho con React y TailwindCSS.',
			image: '/project/movie_night.png',
			github: 'https://github.com/leonelhv/movie_night',
			web: 'https://movie-night-rust.vercel.app/'
		},
		{
			name: 'Ecommerce',
			description:
				'Pequeño ecommerce hecho con Angular, backend con Firestore para almacenar y mostrar diferentes productos.',
			image: '/project/ecommerce.png',
			github: 'https://github.com/leonelhv/ecommerce',
			web: 'https://ecommerce-leonelhv.vercel.app/'
		},
		{
			name: 'Clone Netflix',
			description:
				'Clone de Netflix hecho con Angular y TailwindCSS.Se puede realizar busquedas de peliculas y ver los detalles de cada una.',
			image: '/project/netflix.png',
			github: 'https://github.com/leonelhv/netflix-clone',
			web: 'https://netflix-clone-hv.vercel.app/browse'
		},
		{
			name: 'Todos',
			description:
				'Un todo hecho con React,TailwindCSS y Typescript.Puede agregar,editar y eliminar tareas,y además hacer filtrados por estado.',
			image: '/project/todos.png',
			github: 'https://github.com/leonelhv/todo_react',
			web: 'https://todo-react-lhv.vercel.app/'
		}
	];

	const skills = [
		{
			path: '/icons/angular-icon.svg',
			name: 'Angular'
		},
		{
			path: '/icons/bootstrap.svg',
			name: 'Bootstrap'
		},
		{
			path: '/icons/css-3.svg',
			name: 'CSS'
		},
		{
			path: '/icons/git-icon.svg',
			name: 'Git'
		},
		{
			path: '/icons/html-5.svg',
			name: 'HTML'
		},
		{
			path: '/icons/javascript.svg',
			name: 'Javascript'
		},
		{
			path: '/icons/react.svg',
			name: 'React'
		},
		{
			path: '/icons/tailwindcss-icon.svg',
			name: 'Tailwind'
		},
		{
			path: '/icons/typescript-icon.svg',
			name: 'Typescript'
		}
	];

	const menu = [
		{
			name: 'Inicio',
			path: '#index'
		},
		{
			name: 'Skills',
			path: '#skills'
		},
		{
			name: 'Projects',
			path: '#projects'
		}
	];

	function getCurrentTime() {
		const date = new Date();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();

		const formattedHours = hours < 10 ? '0' + hours : hours;
		const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
		const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

		currentTime = formattedHours + ':' + formattedMinutes;
	}

	onMount(() => {
		getCurrentTime();

		const interval = setInterval(getCurrentTime, 1000);

		return () => clearInterval(interval);
	});
</script>

<div class="bg-zinc-900 w-full min-h-screen bg-gradient">
	<div class="w-3/4 mx-auto flex justify-between items-center gap-4 py-4">
		<div>
			<a href="/" class="font-bold text-4xl text-white"
				>Leo<span class="text-[#6bcaf7]">Dev</span></a
			>
		</div>

		<div class="flex justify-end flex-1 md:justify-center">
			<div class="pointer-events-auto md:hidden" data-headlessui-state="">
				<button
					on:click={() => (showMenu = true)}
					class="flex items-center px-4 py-2 text-sm font-medium border rounded-full group border-black/10 bg-white/10 text-neutral-900 backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-300 dark:backdrop-blur"
					type="button"
					aria-expanded="false"
					data-headlessui-state=""
					id="headlessui-popover-button-:Rbab6:"
					>Menu<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-3 h-auto ml-3 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
						data-darkreader-inline-stroke=""
						style="--darkreader-inline-stroke: currentColor;"
						><polyline points="6 9 12 15 18 9" /></svg
					></button
				>
				<div class={showMenu ? '' : 'hidden'}>
					<div
						class=" fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-zinc-900/80 opacity-100"
						id="headlessui-popover-overlay-:r20:"
						aria-hidden="true"
						data-headlessui-state="open"
					/>
					<div
						class="fixed z-50 p-8 origin-top bg-white inset-x-4 top-8 rounded-3xl ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100"
						id="headlessui-popover-panel-:r21:"
						tabindex="-1"
						data-headlessui-state="open"
					>
						<div class="flex flex-row-reverse items-center justify-between">
							<button
								on:click={() => (showMenu = false)}
								aria-label="Close menu"
								class="p-1 -m-1"
								type="button"
								data-headlessui-state="open"
								tabindex="0"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="w-6 h-6 text-zinc-500 dark:text-zinc-400"
									data-darkreader-inline-stroke=""
									style="--darkreader-inline-stroke: currentColor;"
									><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg
								></button
							>
							<h2 class="text-sm font-medium text-neutral-700 dark:text-zinc-400">Menu</h2>
						</div>
						<nav class="mt-6">
							<ul
								class="-my-2 text-base divide-y divide-zinc-100 text-neutral-700 dark:divide-zinc-100/5 dark:text-zinc-400"
							>
								{#each menu as item}
									<li>
										<a
											on:click={() => (showMenu = false)}
											class="block py-2"
											rel=""
											href={item.path}>{item.name}</a
										>
									</li>
								{/each}
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<nav class="hidden pointer-events-auto md:block">
				<ul
					class="flex px-3 py-2 text-sm font-medium transition border rounded-full border-black/10 bg-zinc-50/50 text-neutral-900 backdrop-blur-sm hover:text-neutral-900 dark:border-white/10 dark:bg-zinc-900/20 dark:text-zinc-400 dark:backdrop-blur dark:hover:text-white"
				>
					{#each menu as item}
						<li>
							<a
								on:click={() => (showMenu = false)}
								rel=""
								class="relative block px-3 transition hover:text-indigo-400"
								href={item.path}>{item.name}</a
							>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
		<div class="hidden md:block">
			<span class="text-white text-2xl font-semibold">{currentTime}</span>
		</div>
	</div>

	<div class="w-3/4 mx-auto mt-24" id="index">
		<h1 class="text-3xl font-bold text-white">Leonel Huachaca</h1>
		<span class="text-base text-zinc-400">
			Soy Desarrollador Frontend Junior.<br />Me gusta la programación y jugar videojuegos.</span
		>
		<p class="mt-4">
			<span
				class="inline-flex items-center px-2 py-1 text-xs font-semibold border rounded-md pointer-events-auto bg-zinc-50/50 backdrop-blur border-white/10 dark:bg-zinc-900/20 text-zinc-100"
				><span class="mr-1.5 flex h-3 w-3 items-center"
					><span
						class="absolute inline-flex w-2 h-2 rounded-full opacity-75 animate-ping bg-lime-400"
					/><span class="relative inline-flex w-2 h-2 rounded-full bg-lime-400" /></span
				>Disponible para nuevos proyectos</span
			>
		</p>
		<div class="flex items-center justify-start gap-6 mt-6 text-white">
			<div class="relative group">
				<div
					class="transition-all translate-y-5 opacity-0 group-hover:translate-y-3 group-hover:opacity-100"
				>
					<div class="relative flex items-center group">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
							><line x1="7" x2="17" y1="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg
						>
					</div>
				</div>
				<a
					class="transition-all group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0"
					rel="noopener noreferrer"
					target="_blank"
					aria-label="Seguir en GitHub"
					href="https://github.com/leonelhv"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-6 h-6 stroke-[1.5px] transition text-neutral-900 group-hover:text-neutral-900 dark:text-zinc-400 dark:group-hover:text-outline-300 outline-zinc-900 group-hover:outline-zinc-900 dark:outline-zinc-400 dark:group-hover:text-zinc-300"
						><path
							d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
						/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
					></a
				>
			</div>
			<div class="relative group">
				<div
					class="transition-all translate-y-5 opacity-0 group-hover:translate-y-3 group-hover:opacity-100"
				>
					<div class="relative flex items-center group">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
							><line x1="7" x2="17" y1="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg
						>
					</div>
				</div>
				<a
					class="transition-all group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0"
					rel="noopener noreferrer"
					target="_blank"
					aria-label="Seguir en LinkedIn"
					href="https://www.linkedin.com/in/leonelhv/"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-6 h-6 stroke-[1.5px] transition text-neutral-900 group-hover:text-neutral-900 dark:text-zinc-400 dark:group-hover:text-outline-300 outline-zinc-900 group-hover:outline-zinc-900 dark:outline-zinc-400 dark:group-hover:text-zinc-300"
						><path
							d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
						/><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg
					></a
				>
			</div>
			<div class="relative group">
				<div
					class="transition-all translate-y-5 opacity-0 group-hover:translate-y-3 group-hover:opacity-100"
				>
					<div class="relative flex items-center group">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="absolute w-4 h-4 transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
							><line x1="7" x2="17" y1="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg
						>
					</div>
				</div>
				<a
					class="transition-all group-hover:opacity-20 group-hover:blur-sm sm:h-7 blur-0 grayscale-0"
					rel="noopener noreferrer"
					target="_blank"
					aria-label="Enviar Correo"
					href="mailto:leonel.huachacav@gmail.com"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-6 h-6 stroke-[1.5px] transition text-neutral-900 group-hover:text-neutral-900 dark:text-zinc-400 dark:group-hover:text-outline-300 outline-zinc-900 group-hover:outline-zinc-900 dark:outline-zinc-400 dark:group-hover:text-zinc-300"
						><rect width="20" height="16" x="2" y="4" rx="2" /><path
							d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
						/></svg
					></a
				>
			</div>
		</div>
	</div>

	<div class="w-3/4 mx-auto mt-24" id="skills">
		<h2
			class="mb-10 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-2xl"
		>
			Skills
		</h2>

		<div
			class="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] gap-8 items-center justify-center text-white"
		>
			{#each skills as skill}
				<div class="flex flex-col justify-between items-center hover:scale-110">
					<img src={skill.path} alt="" class="w-22 h-22" />
					<h2>{skill.name}</h2>
				</div>
			{/each}
		</div>
		<ul />
	</div>

	<div class="w-3/4 mx-auto py-24" id="projects">
		<div class="mt-16 sm:mt-20">
			<h2
				class="mb-10 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-2xl"
			>
				Projects
			</h2>
			<ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
				{#each projects as project}
					<li class="group relative flex flex-col items-start">
						<div class="p-2 transition-transform duration-700 group-hover:scale-105">
							<div
								class="relative z-10 flex items-center justify-center w-full bg-white shadow-md rounded-xl shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
							>
								<img
									alt="movie-list"
									loading="lazy"
									decoding="async"
									class="w-full h-44 object-center transition-transform duration-700 rounded-xl group-hover:scale-105 object-cover"
									src={project.image}
								/>
							</div>
							<h2 class="z-10 mt-6 text-base font-semibold text-neutral-900 dark:text-white">
								<div
									class="absolute z-0 transition scale-95 border shadow opacity-0 bg-zinc-50/70 -inset-y-6 -inset-x-4 border-black/10 group-hover:opacity-100 group-hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/20 sm:-inset-x-6 sm:rounded-2xl"
								/>
								<a target="_blank" rel="noopener noreferrer" href={project.github}
									><span
										class="absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl"
									/><span class="relative z-10">{project.name}</span></a
								>
							</h2>
							<p class="relative z-10 mt-2 text-sm text-neutral-900 dark:text-white">
								<span class="line-clamp-2">{project.description}</span>
							</p>
							<div class="z-30 flex gap-4">
								<a
									class="py-2 text-sm outline-offset-2 transition active:transition-none relative h-[30px] transform-gpu touch-none select-none justify-center gap-2 rounded-md border border-none border-transparent bg-white dark:bg-zinc-800 px-3 text-[13px] font-semibold leading-none text-neutral-700 hover:text-neutral-900 dark:text-zinc-300 dark:hover:text-zinc-100 shadow-button-light dark:shadow-button-dark after:absolute after:-inset-[1px] after:block after:rounded-md after:bg-gradient-to-t after:from-black/5 after:opacity-50 after:transition-opacity hover:after:opacity-100 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50 dark:after:from-black/[0.15] dark:focus-visible:ring-blue-600 z-40 flex items-center w-full mt-6 group"
									target="_blank"
									rel="noopener noreferrer"
									href={project.github}
									><svg
										viewBox="0 0 24 24"
										aria-hidden="true"
										class="w-4 h-4 transition fill-zinc-600 dark:fill-zinc-400 group-active:fill-zinc-900 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-100 dark:group-active:fill-zinc-50"
										><path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
										/></svg
									><span class="ml-2">Github</span></a
								><a
									class="py-2 text-sm outline-offset-2 transition active:transition-none relative h-[30px] transform-gpu touch-none select-none justify-center gap-2 rounded-md border border-none border-transparent bg-white dark:bg-zinc-800 px-3 text-[13px] font-semibold leading-none text-neutral-700 hover:text-neutral-900 dark:text-zinc-300 dark:hover:text-zinc-100 shadow-button-light dark:shadow-button-dark after:absolute after:-inset-[1px] after:block after:rounded-md after:bg-gradient-to-t after:from-black/5 after:opacity-50 after:transition-opacity hover:after:opacity-100 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50 dark:after:from-black/[0.15] dark:focus-visible:ring-blue-600 z-40 flex items-center w-full mt-6 group"
									target="_blank"
									rel="noopener noreferrer"
									href={project.web}
									><svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100 dark:group-active:stroke-zinc-50"
										><path d="M9 17H7A5 5 0 0 1 7 7h2" /><path d="M15 7h2a5 5 0 1 1 0 10h-2" /><line
											x1="8"
											x2="16"
											y1="12"
											y2="12"
										/></svg
									> <span class="ml-2">Website</span></a
								>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.bg-gradient {
		background-image: url('/gradient.svg');
		background-repeat: no-repeat;
		background-position: top;
	}
</style>
