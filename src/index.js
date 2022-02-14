import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';

registerBlockType( 'wpsl/card', {
	edit: Edit,
	save: () => null,
} );
