import {
	createTheme,
	InputBase,
	List,
	PasswordInput,
	Select,
	Text,
	Textarea,
	TextInput,
	Title,
} from '@mantine/core'
import classes from './heading.module.css'
export const theme = createTheme({
	fontFamily: 'Inter, sans-serif' /*'Raleway', sans-serif;*/,
	components: {
		Title: Title.extend({
			classNames: {
				root: classes.heading,
			},
		}),
		Select: Select.extend({
			defaultProps: {
				size: 'md',
				radius: 'md',
			},
			styles: {
				label: {
					marginBottom: 10,
					fontWeight: 400,
					marginLeft: 5,
				},
			},
		}),
		Text: Text.extend({
			defaultProps: {
				fz: 'xs',
				lh: 'md',
			},
			styles: {
				root: {
					letterSpacing: '0.12em',
				},
			},
		}),
		List: List.extend({
			defaultProps: {
				size: 'xs',
			},
		}),
		InputBase: InputBase.extend({
			defaultProps: {
				size: 'md',
				radius: 'md',
			},
			styles: {
				label: {
					marginBottom: 10,
					fontWeight: 400,
					marginLeft: 5,
				},
			},
		}),
		TextInput: TextInput.extend({
			defaultProps: {
				size: 'md',
				radius: 'md',
			},
			styles: {
				label: {
					marginBottom: 10,
					fontWeight: 400,
					marginLeft: 5,
				},
			},
		}),
		PasswordInput: PasswordInput.extend({
			defaultProps: {
				size: 'md',
				radius: 'md',
			},
			styles: {
				label: {
					marginBottom: 10,
					fontWeight: 400,
					marginLeft: 5,
				},
			},
		}),
		Textarea: Textarea.extend({
			defaultProps: {
				size: 'md',
				radius: 'md',
			},
			styles: {
				label: {
					marginBottom: 10,
					fontWeight: 400,
					marginLeft: 5,
				},
			},
		}),
	},
})
