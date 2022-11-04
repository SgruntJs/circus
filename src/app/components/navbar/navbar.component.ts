import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuExpanded = false;

  toggleMenu() {
    setTimeout(() => {
      this.menuExpanded = !this.menuExpanded;
    }, 0);
  }

  @HostListener('window:click', ['$event'])
  listenToOutsideClick(event: PointerEvent) {
    const target = event.target as HTMLElement;
    const isToggler = target.getAttribute('id') === 'navbarDropdown'
    if (!this.menuExpanded || isToggler) {
      return;
    }

    this.menuExpanded = false;
  };

}
