---
title: 为项目做出贡献
intro: 学习如何通过派生为项目做出贡献。
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Forks
  - GitHub
  - Open Source
---

## 关于派生

在自己使用 GitHub 一段时间后，你可能会发现自己想为别人的项目做贡献。或者你想用别人的项目作为你自己的起点。这个过程称为派生。

创建一个“派生”就是生成他人项目的个人副本。分叉在原始存储库和个人副本之间起到了某种桥梁的作用。你可以提交拉取请求，通过提供对原始项目的更改来帮助改进其他人的项目。派生是 GitHub 社交编码的核心。有关详细信息，请参阅"[Fork a repo](/get-started/quickstart/fork-a-repo)。”

## 分叉存储库

本教程使用 [the Spoon-Knife project](https://github.com/octocat/Spoon-Knife)，一个托管在 {% datavariables.product.productname_dotcom_the_website %} 上的测试存储库，用于测试派生和拉取请求工作流。

1. 导航到 `Spoon-Knife` 项目，地址在 https://github.com/octocat/Spoon-Knife.
2. 点击 **Fork**.
   ![Fork button](/assets/images/help/repository/fork_button.png){% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
3. 选择派生存储库的所有者。
   ![Create a new fork page with owner dropdown emphasized](/assets/images/help/repository/fork-choose-owner.png)
4. 默认情况下，派生的名称与其父存储库的名称相同。你可以更改派生的名称以进一步区分它。![Create a new fork page with repository name field emphasized](/assets/images/help/repository/fork-choose-repo-name.png)
5. 或者，添加派生的描述。
   ![Create a new fork page with description field emphasized](/assets/images/help/repository/fork-description.png)
6. 选择是只复制默认分支，还是将所有分支复制到新派生。对于许多派生场景，例如对开源项目的贡献，你只需要复制默认分支。默认情况下，仅复制默认分支。
   ![Option to copy only the default branch](/assets/images/help/repository/copy-default-branch-only.png)
7. 点击 **Create fork**.
   ![Emphasized create fork button](/assets/images/help/repository/fork-create-button.png)

{% note %}

**注意:** 如果要从父存储库复制其他分支，可以从**分支**页面执行此操作。有关详细信息，请参阅 "[Creating and deleting branches within your repository](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)."

{% endnote %}
{% endif %}

## 克隆一个派生

你已经成功派生了 Spoon-Knife 存储库，但到目前为止，它只存在于 {% datavariables.product.product_name %} 上。为了能够处理该项目，你需要将其克隆到计算机上。

你可以使用命令行 {% data variables.product.prodname_cli %} 或 {% datavariables.product.prodname_desktop %} 克隆你的派生。

{% webui %}

1. 在 {% data variables.product.product_name %} 上，导航到 Spoon-Knife 存储库的 **your fork**。
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
4. 键入 `git clone`，然后粘贴之前复制的 URL。使用 {% data variables.product.product_name %} 用户名而不是 `YOUR-USERNAME`:
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  ```

5. 按**输入**。将创建本地克隆。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要创建派生的克隆，请使用 `--clone` 标志。

```shell
gh repo fork REPOSITORY --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

{% enddesktop %}

## 创建要处理的分支

在对项目进行更改之前，应创建一个新分支并将其签出。通过将更改保存在自己的分支中，您可以遵循GitHub Flow，并确保将来更容易再次为同一项目做出贡献。有关详细信息，请参阅 "[GitHub Flow](/get-started/quickstart/github-flow#following-github-flow)."

{% webui %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endwebui %}

{% cli %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endcli %}

{% desktop %}

有关如何在 {% datavariables.product.productname_desktop %} 中创建和管理分支的详细信息，请参阅 "[Managing branches](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches)."

{% enddesktop %}

## 做出和提交更改

继续使用您喜爱的文本编辑器（如[Visual Studio Code](https://code.visualstudio.com)）对项目进行一些更改。例如，您可以更改 `index.html` 添加您的GitHub用户名。

当您准备好提交更改时，准备并提交更改`git add .` 告诉git您希望在下一次提交中包含所有更改 `git commit` 对这些更改进行快照。

{% webui %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endcli %}

{% desktop %}

有关如何在 {% datavariables.product.prodname_desktop %} 中暂存和提交更改的详细信息，请参阅 "[Committing and reviewing changes to your project](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)."

{% enddesktop %}

当你暂存和提交文件时，你基本上会告诉Git，“好吧，给我的更改拍一张快照！”你可以继续做更多的更改，并拍摄更多的提交快照。

现在，您的更改仅存在于本地。当您准备将更改推送到 {% datavariables.product.product_name %} 时，请将更改推到远程。

{% webui %}

```shell
git push
```

{% endwebui %}

{% cli %}

```shell
git push
```

{% endcli %}

{% desktop %}

有关如何在 {% datavariables.product.prodname_desktop %} 中推送更改的详细信息，请参阅 "[Pushing changes to GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github)."

{% enddesktop %}

## 提出拉取请求

最后，您可以对主项目提出更改了！这是产生他人项目派生的最后一步，可以说是最重要的。如果你做了一个你觉得对整个社区有益的改变，你肯定应该考虑做出贡献。

为此，请转到项目所在的 {% datavariables.product.product_name %} 上的存储库。对于本例，它将位于`https://github.com/<your_username>/Spoon-Knife`。您将看到一条横幅，指示您的分支比“octact:main”提前一次提交。单击 **Contribute**，然后 **Open a pull request**。

 {% datavariables.product.product_name %} 将带您进入一个页面，显示您的分叉和 `octact/SpoonKnife` 存储库之间的差异。单击 **Create pull request**。

 {%datavariables.product.product_name%} 将带您进入一个页面，您可以在其中输入更改的标题和描述。提供尽可能多的有用信息和理由是很重要的，因为你一开始就提出了这个请求。项目负责人需要能够确定您的更改是否像您认为的那样对每个人都有用。项目所有者需要能够确定您的更改是否像您认为的那样对每个人都有用。最后，单击 **Create pull request**。

## 管理反馈

拉取请求是一个值得讨论的领域。在这种情况下，章鱼猫很忙，可能不会合并您的更改。对于其他项目，如果项目所有者拒绝了您的拉取请求，或者要求提供更多信息说明为什么会这样做，请不要生气。甚至可能是项目所有者选择不合并您的拉取请求，这完全可以。你的副本将在互联网上臭名昭著。谁知道呢——也许你从未见过的人会发现你的改变比最初的项目更有价值。

## 查找项目

您已成功派生并贡献回存储库。往前走，然后贡献更多！ {% ifversion fpt %} 有关详细信息，请参阅 "[Finding ways to contribute to open source on GitHub](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)."{% endif %}
