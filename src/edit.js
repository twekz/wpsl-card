import {
	useBlockProps,
	MediaUpload,
	URLInput,
} from '@wordpress/block-editor';
import {
	Button,
	BaseControl,
	Card,
	CardBody,
	CardMedia,
	CardDivider,
	TextControl,
} from '@wordpress/components';

import clsx from "clsx";
import './editor.scss';

export default function Edit({ attributes, className, setAttributes }) {
	const renderMedia = (openEvent) => {
		if(attributes.imageId && attributes.imageThumbUrl) {
			return (
				<>
					<CardMedia>
						<div className="wpsl_card-cover">
							<img
								src={ attributes.imageThumbUrl }
								className="wpsl_card-cover-img"
							/>
						</div>
					</CardMedia>
					<CardBody>
						<Button
							onClick={ openEvent }
							variant="secondary"
						>
							Changer l'image…
						</Button>
					</CardBody>
				</>
			);
		}
		else {
			return (
				<CardBody>
					<Button
						onClick={ openEvent }
						variant="primary"
					>
						Choisir une image…
					</Button>
				</CardBody>
			);
		}
	};

	return (
		<div { ...useBlockProps({
			className: clsx("wpsl_card--editor", className),
		})}>
			<Card>
				<MediaUpload
					value={ attributes.imageId }
					allowedTypes={[ 'image' ]}
					render={({ open }) => renderMedia(open) }
					onSelect={( media ) => {
						setAttributes({
							imageId: media.id,
							imageThumbUrl: media.sizes['large'].url,
						})
					}}
				/>
				<CardDivider />
				<CardBody>
					<URLInput
						value={ attributes.url }
						required
						onChange={( url, post ) => setAttributes({
							url,
							title: (post && post.title) || ''
						})}
						label="URL à lier :"
					/>
				</CardBody>
				<CardDivider />
				<CardBody>
					<BaseControl
						label="Titre à afficher :"
						help="Laisser vide pour ne pas afficher de titre."
					>
						<TextControl
							value={ attributes.title }
							onChange={ content => setAttributes({ title: content }) }
							type="text"
						/>
					</BaseControl>
				</CardBody>

			</Card>
		</div>
	);
}
