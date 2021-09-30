import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import { User } from "@/pages/PageUser/DetailUser/UserSettings/UserModel";
import ItemService from "@/pages/PageUser/DetailUser/UserSettings/UserService";

const userService = new ItemService();

@Options({
  components: {
    "menu-header": Header,
    "menu-footer": Footer,
  },
})
export default class UserSettings extends Vue {
  // public onToggleMenuSidebar(): void {
  //     this.$emit('toggle-menu-sidebar');
  // }

  items: User[] = [];
  totalRows: number = 5;
  currentPage: number = 1;
  perPage: number = 5;
  pageOptions: number[] = [5, 10, 15];
  sortBy: String = "";
  sortDesc: boolean = false;
  sortDirection: String = "asc";
  filter = null;

  async initialize() {
    this.items = await userService.getUser();
    console.log(this.items);
  }

  async created() {
    await this.initialize();
  }
}
