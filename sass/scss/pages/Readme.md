
```
$class-slug: for !default
$i : 1;
@for $i from 1 through 4
  .#{$class-slug}-#{$i}
    width: 60px + $i

@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}

$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```
