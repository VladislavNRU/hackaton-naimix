import {
	Avatar,
	Button,
	Card,
	Column,
	DataTable,
	Dialog,
	InputText,
	Password,
	Toolbar,
	Tooltip,
	Textarea,
	Divider,
	TabPanel,
	ScrollPanel,
	Image,
	Tree,
	VirtualScroller,
	Menu,
	InputIcon,
	IconField,
	Tag,
	Badge,
	Message,
	PickList,
	Listbox,
	SplitButton,
	PrimeVue,
} from './components';
import Aura from '@primevue/themes/aura';


export default function regPrimeVue(app: any) {
	app.use(PrimeVue, { theme: { preset: Aura } });
	app.directive('PTooltip', Tooltip);
	app.component('PInputText', InputText);
	app.component('PDialog', Dialog);
	app.component('PButton', Button);
	app.component('PBadge', Badge);
	app.component('PCard', Card);
	app.component('PToolbar', Toolbar);
	app.component('PAvatar', Avatar);
	app.component('PDataTable', DataTable);
	app.component('PTextarea', Textarea);
	app.component('PColumn', Column);
	app.component('PPassword', Password);
	app.component('PPickList', PickList);
	app.component('PDivider', Divider);
	app.component('PTabPanel', TabPanel);
	app.component('PScrollPanel', ScrollPanel);
	app.component('PImage', Image);
	app.component('PVirtualScroller', VirtualScroller);
	app.component('PMenu', Menu);
	app.component('PMessage', Message);
	app.component('PIconField', IconField);
	app.component('PInputIcon', InputIcon);
	app.component('PTag', Tag);
	app.component('PTree', Tree);
	app.component('PListbox', Listbox);
	app.component('PSplitButton', SplitButton);
}
