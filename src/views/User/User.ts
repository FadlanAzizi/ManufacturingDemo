import {Options, Vue} from 'vue-class-component';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import MenuUser from '@/pages/PageUser/MenuUser/MenuUser.vue';

@Options({
    components: {
        'menu-sidebar': Sidebar,
        'menu-header': Header,
        'menu-footer': Footer,
        'menu-user': MenuUser,
    }
})
export default class User extends Vue {
    // public onToggleMenuSidebar(): void {
    //     this.$emit('toggle-menu-sidebar');
    // }
}
