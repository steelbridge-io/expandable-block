/**
 * BLOCK: expandable-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, PlainText } = wp.editor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-expandable-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'expandable-block - CGB Block' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'expandable-block' ),
		__( 'collapse' ),
		__( 'bootsstrap collapse' ),
	],
	attributes: {
		title__one: {
			source: 'text',
			selector: '.cont__title_one'
		},
		message__one: {
			type: 'array',
			source: 'children',
			selector: '.message-body-one',
		},
		title__two: {
			source: 'text',
			selector: '.cont__title_two'
		},
		message__two: {
			type: 'array',
			source: 'children',
			selector: '.message-body-two',
		}
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		// Creates a <p class='wp-block-cgb-block-expandable-block'></p>.
		const { attributes: { title__one, message__one, title__two, message__two }, className, setAttributes } = props;
		const onChangeMessageOne = message__one => { setAttributes( { message__one } ) };
		const onChangeTitleOne = title__one => { setAttributes( { title__one } ) };
		const onChangeTitleTwo = title__two => { setAttributes( { title__two } ) };
		const onChangeMessageTwo = message__two => { setAttributes( { message__two } ) };
		return (
			<div className={ props.className }>
				<h2>
				<PlainText
					tagName="a"
					className="titleName"
					placeholder={ __( 'Add Title' ) }
					onChange={ onChangeTitleOne }
					value={ title__one }
				/>
				</h2>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={ __( 'Add your custom message' ) }
					onChange={ onChangeMessageOne }
					value={ message__one }
				/>
				<h2>
					<PlainText
					tagName="a"
					className="titlename"
					placeholder={ __( 'Add Title' ) }
					onChange={ onChangeTitleTwo}
					value={ title__two }
				/>
				</h2>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={ __( 'Add your custom message' ) }
					onChange={ onChangeMessageTwo }
					value={ message__two }
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		const { attributes: { title__one, message__one, title__two, message__two } } = props;
		return (
			<div>
				<div className="panel-group" id="contentAccordion" role="tablist" aria-multiselectable="true">
					<div className="panel panel-default">
						<div className="panel-heading" role="tab" id="expandContentOne">
							<h4 className="panel-title">
								<a className="cont__title_one" role="button" data-toggle="collapse" data-parent="#contentAccordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									{ title__one }
								</a>
							</h4>
						</div>
						<div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="expandContentOne">
							<div className="panel-body">
								<div className="message-body-one">
									{ message__one }
								</div>
							</div>
						</div>
					</div>
					<div className="panel panel-default">
						<div className="panel-heading" role="tab" id="expandContentTwo">
							<h4 className="panel-title">
								<a className="cont__title_two" role="button" data-toggle="collapse" data-parent="#contentAccordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									{ title__two }
								</a>
							</h4>
						</div>
						<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="expandContentTwo">
							<div className="panel-body">
								<div className="message-body-two">
									{ message__two }
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
} );
