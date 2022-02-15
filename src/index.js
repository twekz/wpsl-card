import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';

registerBlockType( 'wpsl/card', {
	icon: <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19 1h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-14 1.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0l-3.6 3.5-2.9-2c-.3-.2-.6-.2-.8 0l-3.6 2.6v-9.6c-.1-.3.1-.5.4-.5zm14 15h-14c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1l3.5-3.4 3.5 3.4v3.6c0 .3-.2.5-.5.5z"/><path d="m6 21.5h12v1.5h-12z"/></svg>,
	edit: Edit,
	save: () => null,
} );
