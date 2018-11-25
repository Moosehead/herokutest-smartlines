<template>
  <header class="main-nav" :class="{ '+bg-grey-3': $route.name !== 'index' }">
    <div class="container">
      <nav class="main-nav__links-container">
        <div class="main-nav__links">
          <router-link to="/">
            <img class="main-nav__logo" src="~/assets/images/logo.png" alt="Smartlines logo">
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
$_logo-width: $xl-unit * 3;

@include component(main-nav) {
    color: $grey-7;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: $z-five;

    @include part(button) {
        background: transparent;
        border: 0;
        color: $grey-7;
        cursor: pointer;
        line-height: 1;
    }

    @include part(links-container) {
        display: flex;
        height: $nav-height;
        justify-content: space-between;
    }

    @include part(logo) {
        flex: 0 0 $_logo-width;
        max-width: $_logo-width;
    }

    @include part(dropdown) {
        z-index: $z-three;
    }

    @include part(dropdown-container) {
        background: $white;
        border-radius: $xxs-unit;
        box-shadow: $elevation-4;
        display: flex;
        flex-direction: column;
        padding: $sm-unit 0;
        position: absolute;
        top: 100%;

        &::before {
            background: $white;
            border-radius: 1px;
            content: '';
            height: 15px;
            left: 15px;
            position: absolute;
            top: -7px;
            transform: rotate(45deg);
            width: 15px;
            z-index: -1;
        }

        > .main-nav__link {
            min-height: unset;

            &:after {
                display: none;
            }

            &:hover {
                background: $grey-2;
            }
        }
    }

    @include part(link) {
        align-items: center;
        display: flex;
        font-size: $base-unit;
        font-weight: $font-semi-bold;
        letter-spacing: 0.05rem;
        min-height: 75px;
        padding: $md-unit;
        position: relative;
        text-transform: uppercase;

        &:hover {
            color: $primary;
        }

        &::after {
            background: $primary;
            bottom: -2px;
            content: '';
            height: 2px;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
            transform-origin: center;
            transition: width 300ms ease;
            width: 0;
        }

        @include option(active) {
            color: $primary;

            &::after {
                width: 60%;
            }
        }

        @include option(sign-up) {
            background: $primary;
            border-radius: $xl-unit;
            color: $white;
            margin-left: $md-unit;
            min-height: unset;
            padding: $sm-unit $lg-unit;
        }
    }

    @include part(links) {
        align-items: center;
        display: flex;
    }
}
</style>
