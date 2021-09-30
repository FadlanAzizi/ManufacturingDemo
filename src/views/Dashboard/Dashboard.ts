import {Options, Vue} from 'vue-class-component';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
import MenuDashboard from '@/pages/PageDashboard/MenuDashboard/MenuDashboard.vue';

@Options({
    components: {
        'menu-sidebar': Sidebar,
        'menu-header': Header,
        'menu-footer': Footer,
        'menu-dashboard': MenuDashboard,
    }
})
export default class Dashboard extends Vue {
    // public onToggleMenuSidebar(): void {
    //     this.$emit('toggle-menu-sidebar');
    // }
}
