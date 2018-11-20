import {
  AfterViewChecked, AfterViewInit,
  Component, DoCheck, EventEmitter, HostListener, Input, OnChanges, OnDestroy,
  OnInit, Output,
  Renderer2, SimpleChanges,
  ViewChild
} from '@angular/core';
import {fromEvent} from 'rxjs';
import {AppState} from '../../../../../../../core/store/app.reducer';
import {select, Store} from '@ngrx/store';
import {UserState} from '../../../../../../../core/store/user/user.model';
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router} from '@angular/router';

@Component({
  selector: 'onpicks-communicate-box',
  templateUrl: './communicate-box.component.html',
  styleUrls: ['./communicate-box.component.scss']
})
export class CommunicateBoxComponent implements OnInit,
  AfterViewChecked, AfterViewInit, OnDestroy {
  // @Input('comment') comment;
  // @Input('commentIndex') commentIndex;
  // Output을 넣지 않으면, consturctor에다가, service나, store같은, 것을 넣어야됨.
  // 그러면 종속적이 되므로, Output을 통해 조금은 번거럽 더라도, encapsulate화 함
  // @Output('willAddComment') willAddComment = new EventEmitter<any>();
  // @Output('willChangeCommentIndex') willChangeCommentIndex = new EventEmitter<any>();
  @ViewChild('communicateBoxOnly') communicateBoxOnly;
  @ViewChild('communicateBox') communicateBox;
  @ViewChild('scrollOuter') scrollOuter;


  totalList = [
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'I read quite a lot of reviews before purchasing and funny thing...' +
        'many of the flavors ppl disliked turned out to be my most favorite. ' +
        'And the flavors they liked the most, were the ones I liked the least lol. ' +
        'My point is, you just gotta try them for yourself. ' +
        'Yes, the texture is a bit odd due to the chewy nature of dates, ' +
        'but that\'s one thing I love…',
      helpfulCount : 10,
      regitDate : '2018-08-25T09:02:10.391695Z',
      comments : [
        {
          author : 'Nichols',
          content : 'Proin elementum viverra dui vitae posuere. Maecenas eleifend ultrices sapien, eget pretium velit condimentum at. Etiam ut risus lacus.',
        },
        {
          author : 'Barnes',
          content : 'Vestibulum luctus, dui eu tincidunt accumsan, risus dolor sodales dolor, et rhoncus velit orci in sem.',
        },
        {
          author : 'Cole',
          content : 'Donec placerat odio in blandit venenatis. Praesent at nunc at est semper rhoncus. ',
        }
      ]
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Maecenas accumsan fringilla ligula, sit amet ultrices dui malesuada sit amet. Vivamus et suscipit quam. Praesent interdum sed arcu vitae bibendum. Pellentesque tempus pharetra mi, at rhoncus leo euismod et. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
      comments : [
        {
          author : 'Pierce',
          content : 'Proin pellentesque mauris id augue efficitur dictum. Donec non neque venenatis, iaculis urna a, rhoncus orci.',
        },
        {
          author : 'Mcdonalid',
          content : 'Quisque in sapien venenatis ipsum lacinia consectetur. Donec ligula nisi, auctor vitae mollis ut, commodo sed tortor.',
        },
        {
          author : 'Rose',
          content : 'Phasellus ut nisl mattis, facilisis neque vitae, efficitur dui.',
        }
      ]
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Vestibulum placerat non eros nec congue. Fusce convallis turpis sed risus laoreet efficitur. Etiam at malesuada mi, ut sodales urna. Aenean accumsan ante sed nisl sodales facilisis. Maecenas at vehicula lorem. ',
      helpfulCount : 3,
      regitDate : '2018-09-19T09:02:10.391695Z',
      comments : [
        {
          author : 'Johnson',
          content : 'Sed in finibus elit. Suspendisse rhoncus lorem et posuere mattis. Mauris ac diam tristique, molestie mauris ac, maximus magna.',
        },
        {
          author : 'Rivera',
          content : 'Proin lobortis sapien quis diam placerat, tincidunt elementum enim sagittis. Sed a pretium sem.',
        },
        {
          author : 'Anderson',
          content : 'Morbi sed vestibulum ex. Quisque eget tristique lectus.',
        }
      ]
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Suspendisse ultricies eget erat id imperdiet. Integer efficitur a erat vitae dignissim.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
      comments : [
        {
          author : 'Diaz',
          content : 'In posuere, nulla ut laoreet condimentum, est sapien efficitur metus, et convallis magna urna a enim.',
        },
        {
          author : 'Stone',
          content : 'Nullam egestas massa ut turpis elementum auctor.',
        },
        {
          author : 'Hunt',
          content : 'Etiam tempor feugiat orci non tincidunt. Vestibulum mi lorem, placerat eu neque non, aliquet interdum tellus.',
        }
      ]
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Aenean sodales finibus nibh at aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas dignissim orci semper, posuere nisi sed, iaculis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse posuere pharetra justo sed tempus. Ut commodo bibendum nisl, et convallis dolor. ',
      helpfulCount : 7,
      regitDate : '2018-09-19T09:02:10.391695Z',
      comments : [
        {
          author : 'John',
          content : 'Curabitur posuere est justo, nec posuere justo porttitor gravida. Suspendisse faucibus malesuada egestas.',
        },
        {
          author : 'Chris',
          content : 'Proin sit amet lacus id dolor tempor auctor in et velit. Integer tincidunt interdum justo, a pulvinar sapien porttitor vel.',
        },
        {
          author : 'John',
          content : 'Curabitur eget nunc efficitur, vestibulum eros id, commodo metus. Maecenas sed convallis mi. Donec maximus eros dui, a tincidunt felis egestas posuere.',
        }
      ]
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-3.png',
      review: 'Vivamus non lacus nibh. Nulla mattis dignissim augue, eget semper leo aliquet in.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
      comments : [
        {
          author : 'Carolyn',
          content : 'Nulla mauris mauris, mollis quis nisi a, dapibus porttitor metus. Sed sit amet magna sed tellus aliquam imperdiet vitae vitae ex.',
        },
        {
          author : 'Dwayne',
          content : 'Integer sit amet mauris vel lectus ornare ornare sed eget tortor.',
        },
        {
          author : 'Payne',
          content : 'Vestibulum purus dui, porta ut blandit feugiat, euismod sed eros.',
        }
      ]

    },
    {
      name: 'Jessica',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      reviewImg : 'https://s3.amazonaws.com/img.onpicks.com/p-customer__image--large-3.png',
      review: 'Duis sed justo vel lacus lacinia iaculis vel non mi. Donec risus nibh, consectetur nec finibus eget, posuere a sem. Sed in suscipit ante. Vivamus leo dolor, cursus quis porttitor non, laoreet quis purus. Phasellus feugiat sed odio in placerat. Integer tellus magna, tempor non gravida facilisis, ullamcorper ac odio. Sed tincidunt lacus ut commodo imperdiet.',
      helpfulCount : 9,
      regitDate : '2018-09-19T09:02:10.391695Z',
      comments : [
        {
          author : 'Carmen',
          content : 'Donec justo ligula, consequat in tincidunt vitae, sagittis non tortor.',
        },
        {
          author : 'Graves',
          content : 'Quisque tempor commodo ligula, sed placerat velit vehicula id. Fusce ornare nibh dolor, et semper ante pulvinar at.',
        },
        {
          author : 'Tyrone',
          content : 'Sed pulvinar urna id metus consectetur eleifend ut in nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }
      ]
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Integer nec sapien nec justo auctor sagittis finibus nec ante. Curabitur in neque cursus, porta tortor sit amet, fermentum lorem.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
      comments : [
        {
          author : 'Harris',
          content : 'Mauris lacinia mi enim, pellentesque varius leo gravida at.',
        },
        {
          author : 'Brent',
          content : 'Donec in quam id lorem consectetur consequat.',
        },
        {
          author : 'Rhodes',
          content : 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        }
      ]
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Nulla volutpat vitae risus sed vestibulum. Curabitur at sapien hendrerit, bibendum tortor quis, lacinia felis. Mauris leo metus, scelerisque id odio ac, congue laoreet enim. Integer pulvinar nec augue non vulputate. Curabitur ac orci libero. Cras condimentum ipsum sapien. Phasellus vitae sem sem. Cras in pulvinar ante. Donec id aliquet risus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: ' Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      reviewImg : '',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: ' Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.',
      helpfulCount : 5,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.',
      helpfulCount : 2,
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      reviewImg : '',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.',
      helpfulCount : 4,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      reviewImg : '',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: ' Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      reviewImg : '',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. ',
      helpfulCount : 2
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: ' Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      reviewImg : '',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. ',
      helpfulCount : 7,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z'
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. ',
      helpfulCount : 23,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: ' Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      reviewImg : '',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. ',
      helpfulCount : 24,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum eget ante eu diam cursus lobortis vitae eget turpis.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin quis quam feugiat, venenatis arcu id, pulvinar tellus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Suspendisse quis velit pellentesque, iaculis lectus et, viverra orci. Suspendisse pretium sem vel elementum cursus. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Vestibulum consectetur mollis ipsum quis vestibulum. Vestibulum vitae est maximus, molestie tortor non, tincidunt orci. Mauris ut molestie nunc. Suspendisse sit amet commodo mauris.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Etiam sed purus pharetra, placerat elit eu, bibendum ligula. Nullam in felis elementum justo placerat hendrerit vitae id diam. Donec odio tortor, efficitur et orci sit amet, ornare efficitur leo. Duis tincidunt porttitor odio eu finibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris in placerat quam. Duis elementum porta nisi vitae auctor. Donec viverra non est eget placerat. Mauris fringilla purus sapien, sed porta sem faucibus id. Maecenas eu quam iaculis, sodales turpis in, posuere nisi. Donec sed ante interdum, sollicitudin magna non, lacinia est. Proin condimentum turpis ut blandit blandit.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: ' Suspendisse eu blandit neque, eget aliquam metus. Nulla at libero tincidunt, finibus eros et, luctus dolor. Cras ut mattis mi. Morbi dapibus varius est nec varius. Fusce egestas luctus enim at imperdiet. Aliquam vel elementum nunc. Aliquam non erat luctus, cursus quam vel, venenatis odio. In hac habitasse platea dictumst. Morbi tempus sem vel vulputate porttitor.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Mauris tincidunt diam et nibh tincidunt, sit amet rhoncus risus laoreet. Phasellus in scelerisque augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at est commodo, lobortis mi sed, sollicitudin risus. Phasellus non diam risus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Jessica',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-jessica.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-2.jpg',
      reviewImg : '',
      review: 'Pellentesque tempus placerat nisl a tempor. Sed sit amet ultricies purus. In in ornare ante. Nulla erat diam, suscipit nec dictum vitae, molestie id felis. Etiam egestas sem at risus pellentesque vehicula. In nec enim id tortor iaculis luctus. ',
      helpfulCount : 9,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Chris',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-chris.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras sit amet nisl vel nisl gravida faucibus at in libero. Phasellus at elit quis felis auctor sodales. Suspendisse nec condimentum mi. Nullam enim ipsum, suscipit at libero vel, ultricies blandit ipsum. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      regitDate : '',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Proin dignissim mauris rutrum, pharetra urna in, sodales velit. Fusce ultricies enim non aliquet iaculis. Morbi at massa in orci rutrum vulputate. Proin eu rutrum nisi. Mauris nisi nulla, ultricies nec justo eget, scelerisque facilisis magna.'
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'pretium ullamcorper lacus felis in ligula. Curabitur tincidunt auctor consectetur. Proin rutrum a dolor sed bibendum. Praesent et leo sollicitudin metus placerat rutrum id sit amet lacus. Fusce malesuada eu ligula quis porta. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Sed vitae metus maximus, placerat odio eu, finibus odio. Praesent mollis auctor velit, id congue neque. Quisque maximus arcu et velit porta, ut congue ante faucibus.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Nullam condimentum neque augue, non placerat augue tempor id. Vestibulum a ultrices justo. Ut rhoncus leo ac neque vestibulum molestie. In eget purus at ligula volutpat ultrices eget non magna. ',
      helpfulCount : 21,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Rose',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-rose.jpg',
      reviewThumbImg : 'https://s3.amazonaws.com/img.onpicks.com/p-review__image-1.jpg',
      reviewImg : '',
      review: 'Donec varius viverra nisl, nec mollis metus efficitur non. Nunc id nulla hendrerit, sodales urna sed, varius ante. Phasellus nec eleifend odio, non iaculis est. Integer gravida enim ut orci vestibulum, vel pulvinar massa accumsan. ',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Emiliy',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-emiliy.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Cras volutpat, lorem ac blandit aliquam, nulla mi rhoncus nibh, a consequat felis nisl vel augue. Sed est est, maximus in risus sed, suscipit venenatis risus. Aliquam pulvinar metus nunc, ut faucibus nisl scelerisque imperdiet.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'Stephanie',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-stephanie.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'In sit amet leo urna. Sed ut nisl et leo sodales lobortis at sed dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris in vulputate tortor.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Curabitur ultricies mi purus, vel vestibulum eros vehicula a. Nulla facilisi. Duis venenatis euismod augue nec convallis. Quisque vulputate vestibulum ante non cursus. Phasellus tincidunt mollis massa. Praesent ultrices lorem eu massa porttitor, eu malesuada turpis tempor. Integer id nulla neque.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    },
    {
      name: 'John',
      starRating: '4.5',
      profileImg : 'https://s3.amazonaws.com/img.onpicks.com/profile-john.jpg',
      reviewThumbImg : '',
      reviewImg : '',
      review: 'Quisque a orci convallis leo posuere lacinia in et ipsum. Curabitur ultricies, ex et venenatis vehicula, magna nulla molestie est, volutpat tincidunt odio nisl a nulla.',
      helpfulCount : 2,
      regitDate : '2018-09-19T09:02:10.391695Z',
    }
  ];

  comment;
  currentCommentIndex;
  addReviewState = false;
  communicateBoxTransition$;
  isViewImage = false;
  reviewsUIState$;
  buttonState = false;
  signInUserInfo: UserState;

  // 검은색 부분을 눌러을 때, 꼬이는것을 방지하기 위해 추가
  popupState = false;
  constructor(
    private renderer: Renderer2,
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    // private param: ActivatedRouteSnapshot,
  ) {
    this.reviewsUIState$ = this.store.pipe( select('p' ) );
    // this.signInUserInfo = this.store.pipe( select((state: AppState) => state )).subscribe( val => console.log(val));
    this.store.pipe(
      select(
        (state: any) => state.auth.user = {
          email: 'example@mojostudio.io',
          nickname: 'hello guys',
          thumbnailSmallImgSrc: 'https://randomuser.me/api/portraits/women/21.jpg'
        } ))
      .subscribe( (val: UserState) => this.signInUserInfo = val);
  }

  ngOnInit() {
    // http://localhost/kr/shops/p/1/reviews/6 6부분의 값을 가져옴
    this.route.params.subscribe(
      (params: Params) => {
      this.comment = this.totalList[params['id']];
      this.currentCommentIndex = params['id'];
      if ( this.comment.reviewImg !== '') {

        // buttonState가 false 일 때만, 이미지를 바로 표출할 수 있게
        // 해당 State는 transition이 끝날때거나, 버튼 누르지 않고, 바로 화면에 뜰때만 false가 됨
        if ( this.buttonState === false ) { this.isViewImage = true; }


        this.renderer.setStyle(this.communicateBox.nativeElement, 'width', '1056px');
        this.renderer.setStyle(this.communicateBoxOnly.nativeElement, 'width' , '408px');
      } else {
        this.renderer.setStyle(this.communicateBox.nativeElement, 'width', '660px');
        this.renderer.setStyle(this.communicateBoxOnly.nativeElement, 'width' , '660px');
      }

    });
  }

  ngOnDestroy() {
    console.log('i`m destroyed')
    this.communicateBoxTransition$.unsubscribe();


    // route params는 unsubscribe할 필요 없음.
    // There are a few exceptional observables where this is not necessary. The ActivatedRoute observables are among the exceptions.
    //
    //  The ActivatedRoute and its observables are insulated from the Router itself. The Router destroys a routed component when it is no longer needed and the injected ActivatedRoute dies with it.
    //
    //  Feel free to unsubscribe anyway. It is harmless and never a bad practice.
    // https://angular.io/guide/router
  }

  ngAfterViewChecked() {

    // TODO : 더 좋은 방법이 있는지 찾아 보기, 하지만 현재로써는 이런식의 방법이 가장 괜찮은것 같다.
    // 해당 소스는, 사용자가 리뷰를 작성하면,
    // 그 State을 컴포넌트에서 관리하여, AfterViewChecked에서 순간적으로 관리를 한다.
    // DoCheck보다, VeiwChecked가 좀더 나중에 발생하고, 아마, View가 바뀔때, 그 다음에 Hook되는것 같음.

    if ( this.addReviewState === true ) {
      this.addReviewState = false;
      const scrollOuter = getComputedStyle(this.scrollOuter.nativeElement, null);

      const scrollOuterHeight = parseInt(scrollOuter.height, 10);
      const scrollHeight = parseInt(this.scrollOuter.nativeElement.scrollHeight, 10);
      const result = scrollHeight - scrollOuterHeight;

      this.renderer.setProperty(
        this.scrollOuter.nativeElement,
        'scrollTop',
        (result));

      console.log(result);
    }

  }

  ngAfterViewInit() {

    console.log('ngViewInit11');
    this.communicateBoxTransition$ =
      fromEvent(this.communicateBox.nativeElement, 'transitionend').subscribe( val => {
        // transition이 끝났을때 아래 2개의 변수 상태값 변경
        this.popupState = true;
        this.buttonState = false;
        if ( this.comment.reviewImg !== '') {
          this.isViewImage = true;
        } else {
          this.isViewImage = false;
        }
      });;
  }




  commentTyping(event: KeyboardEvent, f) {

    if ( event.key === 'Enter' ) {

      this.totalList[this.currentCommentIndex].comments.push({
        author : this.signInUserInfo.nickname,
        content : f.value
      })

      this.renderer.setProperty(f, 'value', '');

      // ngAfterViewChecked가 매번 계속 발생하기 때문에,
      // 해당 State일때만, AfterViewChecked에서 코드 실행시키기 위해, 아래와같은 변수 추가
      this.addReviewState = true;

    }
  }

  prevButton() {

    if ( this.currentCommentIndex > 0 ) {
      this.buttonState = true;
      this.currentCommentIndex--;
      // this.comment = this.totalList[this.currentCommentIndex];
      this.router.navigate(['../' + this.currentCommentIndex], {relativeTo: this.route});

      // this.willChangeCommentIndex.emit('decrease');
    }

  }


  nextButton() {


    if ( this.currentCommentIndex < this.totalList.length) {
      this.buttonState = true;
      this.currentCommentIndex++;
      // this.comment = this.totalList[this.currentCommentIndex];
      this.router.navigate(['../' + this.currentCommentIndex], {relativeTo: this.route});


      // this.willChangeCommentIndex.emit('decrease');
    }


  }


  @HostListener('document:click', ['$event'])
  clickout(event) {
    if ( this.popupState === true) {
      if (this.communicateBox.nativeElement.contains(event.target)) {
        // console.log('clicked inside');

      } else {

        this.renderer.setStyle(document.body, 'overflow', '');
        this.router.navigate(['../../'], {relativeTo: this.route});
      }
    }

  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {

    // &&  this.communicateBox.nativeElement.style.display !== 'none'
    if ( event.key === 'Escape' ) {
      this.renderer.setStyle(document.body, 'overflow', '');
      this.router.navigate( ['../../'], {relativeTo: this.route } );
    }
  }

}
