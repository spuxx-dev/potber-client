import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import { Post } from 'potber/services/api/types/post';
import BbCodeParserService from 'potber/services/bbcode-parser';
import ENV from 'potber/config/environment';

interface Signature {
  Args: {
    post: Post;
    avatarStyle: string;
  };
}

export default class PostComponent extends Component<Signature> {
  @service declare bbcodeParser: BbCodeParserService;

  declare args: Signature['Args'];

  get date() {
    return this.args.post.date.toLocaleString();
  }

  get content() {
    return this.bbcodeParser.parsePostContent(this.args.post.content);
  }

  get showSmallAvatar() {
    console.log(this.args.avatarStyle);
    return this.args.post.avatarUrl && this.args.avatarStyle === 'small';
  }

  get showLargeAvatar() {
    return this.args.post.avatarUrl && this.args.avatarStyle === 'large';
  }

  get avatarUrl() {
    if (this.args.post.avatarUrl) {
      // Remove './' from avatarUrl
      const url = this.args.post.avatarUrl?.slice(
        2,
        this.args.post.avatarUrl.length
      );
      return `${ENV.APP['FORUM_URL']}${url}`;
    }
  }

  @action handleMenuClick() {
    // do something
  }
}
